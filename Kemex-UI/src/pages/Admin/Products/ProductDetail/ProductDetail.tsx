import styles from './ProductDetail.module.scss'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { z } from 'zod'
import { IProductDescriptions } from '@/store/types.ts'
import {
  addProductDescription,
  deleteProductDescription, editProductDescription, fetchProductById,
} from '@/store/productReducer.ts'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import AddIcon from '@/components/lib/icons/AddIcon'
import { Tooltip } from 'react-tooltip'
import NoData from '@/components/lib/NoData'
import Loading from '@/components/lib/Loading'
import EditIcon from '@/components/lib/icons/EditIcon'
import DeleteIcon from '@/components/lib/icons/DeleteIcon'
import Rodal from 'rodal'
import {  useParams } from 'react-router-dom'
import BreadCrumbs from '@/components/lib/Breadcrumbs'

const ProductDetail = () => {
  const [showForm, setShowForm] = useState(false)
  const [showConfirm, setshowConfirm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const {loading, product} = useAppSelector(state => state.products)
  const {id} = useParams()
  const dispatch = useAppDispatch()

  const detailSchema = z.object({
    name: z.string({ required_error: 'Categoriya adı məcburidir' }),

  })
  const onSubmit = async (data:Partial<IProductDescriptions>) => {
    if(isEditing){
      await dispatch(editProductDescription({ descriptionId:selectedId, description: data.name }))
      formik.setValues(() => ({
        name: '',
      }))
      setShowForm(false)
      setIsEditing(false)
      await dispatch(fetchProductById(Number(id)))
    }else {
      await dispatch(addProductDescription({ productId:Number(id), description: data.name }))
      await dispatch(fetchProductById(Number(id)))
      formik.setValues(() => ({
        name: '',
      }))
      setShowForm(false)
    }
  }
  const onDeleteProductDescription = async (detailId: number) =>{
    await dispatch(deleteProductDescription(detailId))
     await dispatch(fetchProductById(Number(id)))
    setshowConfirm(false)
  }
  const openConfirm = (id) =>{
    setshowConfirm(true)
    setSelectedId(id)
  }
  const onEditClick = (item: Partial<IProductDescriptions>) =>{
    formik.setValues({name: item.description})
    setSelectedId(item.id!)
    setIsEditing(true)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: onSubmit,
    validateOnChange: false,
    validationSchema: toFormikValidationSchema(detailSchema),
  })

  useEffect(() => {
    dispatch(fetchProductById(Number(id)))
  }, [])



  return (
    <section className={styles.detail}>
      <div className={styles.addBtn}>
        <BreadCrumbs label={product?.name!} headPath={'/admin'} secondPath={'/admin/products-all'}/>
        <button id={'add'} onClick={() => setShowForm(true)}>
          <AddIcon/>
        </button>
        <Tooltip anchorSelect="#add" place="top"  style={{borderRadius: '5px', background: '#e07d54'}}>
          Əlavə et
        </Tooltip>
      </div>
      <table className={styles.detailTable}>
        <thead>
        <tr>
          <th>#№</th>
          <th>Məhsulun Detalları</th>
          <th colSpan={2}></th>
        </tr>
        </thead>
        <tbody>
        {!loading && product?.productDescriptions && product?.productDescriptions?.length === 0 &&
          <tr>
            <td colSpan={7}>
              <div style={{width:'100%'}}><NoData/></div>
            </td>
          </tr>
        }
        {loading ?
          <tr>
            <td colSpan={7}>
              <div style={{width:'100%'}}><Loading/></div>
            </td>
          </tr>
          : product?.productDescriptions && product?.productDescriptions?.map((item, i) => {
            return (
              <tr key={item.id} >
                <td className={styles.detailCol}>{i+1}</td>
                <td className={styles.detailCol}>{item.description}</td>
                <td className={styles.detailCol}>
                  <button
                    id={'edit'}
                    className={styles.categoriesBtn}
                    onClick={() =>  onEditClick(item)}
                    data-tooltip-delay-show={400}
                  >
                    <EditIcon/>
                  </button>
                  <Tooltip anchorSelect="#edit" place="top"  style={{borderRadius: '5px', background: '#e07d54'}}>
                    Düzəliş et
                  </Tooltip>
                </td>
                <td className={styles.detailCol}>
                  <button
                    id={'delete'}
                    className={styles.categoriesBtn}
                    onClick={() =>openConfirm(item.id)}
                    data-tooltip-delay-show={400}
                  >
                    <DeleteIcon/>
                  </button>
                  <Tooltip anchorSelect="#delete" place="top"  style={{borderRadius: '5px', background: '#e07d54'}}>
                    Silin
                  </Tooltip>
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>
      <Rodal
        visible={showForm ||isEditing}
        onClose={() => {
          setShowForm(false)
          setIsEditing(false)
        }}
        animation={'slideDown'}
      >
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <h4 className={styles.formTitle}>Detall əlave et:</h4>
          <div className={styles.formDivider}></div>
          <div className={styles.formInputs}>
            <label htmlFor='category'>Detal adı :</label>
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
          </div>
          <div className={styles.formBtns}>
            <button className={styles.formBtn} type={'submit'}>
              Yadda saxla
            </button>
          </div>
        </form>
      </Rodal>
      <Rodal
        visible={showConfirm}
        onClose={() => setshowConfirm(false)}
        height={180}
        animation={'slideDown'}
      >
        <h4 className={styles.confirmTitle}>Məhsulun detalını silmək istədiyinizə əminsiniz?</h4>
        <div className={styles.formBtns}>
          <button className={`${styles.formBtn} ${styles.formBtnRight}`} type={'button'} onClick={() => setshowConfirm(false)}>
            Xeyr
          </button>
          <button
            className={styles.formBtn} type={'button'}
            onClick={() => onDeleteProductDescription(selectedId)}
          >
            Bəli
          </button>
        </div>
      </Rodal>
    </section>
  )
}

export default ProductDetail
