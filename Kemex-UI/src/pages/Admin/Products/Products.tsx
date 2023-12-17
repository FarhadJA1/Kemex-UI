import styles from './Products.module.scss'
import AddIcon from '@/components/lib/icons/AddIcon'
import { Tooltip } from 'react-tooltip'
import NoData from '@/components/lib/NoData'
import Loading from '@/components/lib/Loading'
import EditIcon from '@/components/lib/icons/EditIcon'
import DeleteIcon from '@/components/lib/icons/DeleteIcon'
import Rodal from 'rodal'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { useEffect, useState } from 'react'
import {
  addProduct,
  deleteProduct,
  editProduct,
  fetchCategory,
  fetchProductsByCategory,
} from '@/store/productReducer.ts'
import Select from 'react-select'
import { z } from 'zod'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import LinkIcon from '@/components/lib/icons/LinkIcon'
import { Link } from 'react-router-dom'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [showForm, setShowForm] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [inputs, setInputs] = useState([''])
  const { loading, data, products, categories } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const productSchema = z.object({
    name: z.string({ required_error: 'Məhsulun adı məcburidir' }),
  })

  const options = categories.map(item => {
    return {
      value: item.id,
      label: item.name,
    }
  })
  const handleChange = (selectedOption: { value: number, label: string } | null) => {
    setSelectedCategory(selectedOption?.value!)
  }

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
    formik.setFieldValue(`description[${index}]`, value)
  }

  const handleAddInput = () => {
    setInputs([...inputs, ''])
  }

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs]
    newInputs.splice(index, 1)
    setInputs(newInputs)
  }

  const onSubmit = async (data: any) => {
    if (isEditing) {
      await dispatch(editProduct({ id: selectedId, name: data.name }))
      setInputs([''])
      formik.setValues(() => ({
        name: '',
        description: [''],
      }))
      setShowForm(false)
      setIsEditing(false)
      await dispatch(fetchProductsByCategory(selectedCategory))
    } else {
      await dispatch(addProduct({ name: data.name, categoryId: selectedCategory, descriptions: data.description }))
      setInputs([''])
      formik.setValues(() => ({
        name: '',
        description: [''],
      }))
      setShowForm(false)
      await dispatch(fetchProductsByCategory(selectedCategory))
    }
  }
  const onDeleteCategory = async (id: number) => {
    await dispatch(deleteProduct(id))
    setShowConfirm(false)
    await dispatch(fetchProductsByCategory(selectedCategory))
  }

  const openConfirm = (id) => {
    setShowConfirm(true)
    setSelectedId(id)
  }

  const onEditClick = (item: any) => {
    formik.setValues({ name: item.name, description: inputs })
    setSelectedId(item.id!)
    setIsEditing(true)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      description: inputs.map(() => ''),
    },
    onSubmit: onSubmit,
    validateOnChange: false,
    validationSchema: toFormikValidationSchema(productSchema),
  })

  useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  useEffect(() => {
    dispatch(fetchProductsByCategory(selectedCategory))
  }, [selectedCategory])

  return (
    <section className={styles.products}>
      <div className={styles.productsHeader}>
        <div className={styles.productsSelect}>
          <Select options={options} onChange={handleChange} autoFocus={true} defaultValue={options[0]} styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? '#e07d54' : '#e07d54',
              width: '100%',
            }),
          }} />
        </div>
        <button id={'add'}
                onClick={() => setShowForm(true)}
        >
          <AddIcon />
        </button>
        <Tooltip anchorSelect='#add' place='top' style={{ borderRadius: '5px', background: '#e07d54' }}>
          Əlavə et
        </Tooltip>
      </div>
      <table className={styles.productsTable}>
        <thead>
        <tr>
          <th>#№</th>
          <th>Məhsullar</th>
          <th colSpan={3}></th>

        </tr>
        </thead>
        <tbody>
        {!loading && data.length === 0 &&
          <tr>
            <td colSpan={7}>
              <div style={{ width: '100%' }}><NoData /></div>
            </td>
          </tr>
        }
        {loading ?
          <tr>
            <td colSpan={7}>
              <div style={{ width: '100%' }}><Loading /></div>
            </td>
          </tr>
          : products?.map((product, i) => {
            return (
              <tr key={product.id}>
                <td className={styles.productsCol}>{i + 1}</td>
                <td className={styles.productsCol}>{product.name}</td>
                <td className={styles.productsCol}>
                  <button
                    id={'edit'}
                    className={styles.categoriesBtn}
                    onClick={() => onEditClick(product)}
                    data-tooltip-delay-show={400}
                  >
                    <EditIcon />
                  </button>
                  <Tooltip anchorSelect='#edit' place='top' style={{ borderRadius: '5px', background: '#e07d54' }}>
                    Düzəliş et
                  </Tooltip>
                </td>
                <td className={styles.productsCol}>
                  <button
                    id={'delete'}
                    className={styles.categoriesBtn}
                    onClick={() => openConfirm(product.id)}
                    data-tooltip-delay-show={400}
                  >
                    <DeleteIcon />
                  </button>
                  <Tooltip anchorSelect='#delete' place='top' style={{ borderRadius: '5px', background: '#e07d54' }}>
                    Silin
                  </Tooltip>
                </td>
                <td className={styles.productsCol}>
                  <Link to={`/admin/products-all/${product.id}`}
                        id={'details'}
                        className={styles.categoriesBtn}
                        data-tooltip-delay-show={400}
                  >
                    <LinkIcon />
                  </Link>
                  <Tooltip anchorSelect='#details' place='top' style={{ borderRadius: '5px', background: '#e07d54' }}>
                    Ətraflı baxış
                  </Tooltip>
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>
      <Rodal
        visible={showForm || isEditing}
        onClose={() => {
          setShowForm(false)
          setIsEditing(false)
          setInputs([''])
          formik.setValues(() => ({
            name: '',
            description: [''],
          }))
        }}
        height={350}
        animation={'slideDown'}
        className={styles.modal}
        customStyles={{ overflowY: 'scroll', minHeight: '300px' }}
      >
        <form className={styles.form}
              onSubmit={formik.handleSubmit}
        >
          <h4 className={styles.formTitle}>Məhsul əlave et:</h4>
          <div className={styles.formDivider}></div>
          <div className={styles.formInputs}>
            <label htmlFor='category'>Məhsulun adı :</label>
            <input
              type='text'
              name='name'
              id='category'
              placeholder={'yazın'}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <div className={styles.formFieldError}>{formik.errors.name}</div>
            )}
            {!isEditing && inputs.map((input, index) => (
              <div key={index} className={styles.formInputs}>
                <label htmlFor={`product-${index}`}>Detal adı :</label>
                <div className={styles.formDetails}>
                  <input
                    type='text'
                    name={`description[${index}]`}
                    id={`product-${index}`}
                    placeholder={'yazın'}
                    value={input}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  {formik.errors.description && (
                    <div className={styles.formFieldError}>{formik.errors.description}</div>
                  )}
                  {inputs.length > 1 &&
                    <button
                      className={styles.formDetailsBtn}
                      type='button'
                      onClick={() => handleRemoveInput(index)}
                    >
                      <DeleteIcon width={'14'} height={'14'} />
                    </button>}
                </div>
              </div>
            ))}
          </div>
          {!isEditing &&<div className={styles.formDetailsAddBtn}>
            <button id={'addDetail'} type='button' onClick={handleAddInput}>
              <AddIcon />
            </button>
            <Tooltip anchorSelect='#addDetail' place='top' style={{ borderRadius: '5px', background: '#e07d54' }}>
              Detal Əlavə et
            </Tooltip>
          </div>}

          <div className={styles.formBtns}>
            <button className={styles.formBtn} type={'submit'}>
              Yadda saxla
            </button>
          </div>
        </form>
      </Rodal>
      <Rodal
        visible={showConfirm}
        onClose={() => setShowConfirm(false)}
        // width={300}
        height={180}
        animation={'slideDown'}

      >
        <h4 className={styles.confirmTitle}>Məhsulu silmək istədiyinizə əminsiniz?</h4>
        <div className={styles.formBtns}>
          <button className={`${styles.formBtn} ${styles.formBtnRight}`} type={'button'}
                  onClick={() => setShowConfirm(false)}
          >
            Xeyr
          </button>
          <button
            className={styles.formBtn} type={'button'}
            onClick={() => onDeleteCategory(selectedId)}
          >
            Bəli
          </button>
        </div>
      </Rodal>
    </section>
  )
}

export default Products
