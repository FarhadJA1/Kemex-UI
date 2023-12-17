import styles from './Categories.module.scss'
import NoData from '@/components/lib/NoData'
import Loading from '@/components/lib/Loading'
import { Tooltip } from 'react-tooltip'
import Rodal from 'rodal'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { useEffect, useState } from 'react'
import { addCategory, deleteCategory, editCategory, fetchCategory } from '@/store/productReducer.ts'
import AddIcon from '@/components/lib/icons/AddIcon'
import EditIcon from '@/components/lib/icons/EditIcon'
import DeleteIcon from '@/components/lib/icons/DeleteIcon'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { z } from 'zod'
import { ICategory } from '@/store/types.ts'

const Categories = () => {
  const [showForm, setShowForm] = useState(false)
  const [showConfirm, setshowConfirm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedId, setSelectedId] = useState(0)

  const {loading,categories} = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const categorySchema = z.object({
    name: z.string({ required_error: 'Categoriya adı məcburidir' }),
  })
  const onSubmit = async (data:Partial<ICategory>) => {
    if(isEditing){
      await dispatch(editCategory({ id:selectedId, name: data.name }))
      formik.setValues(() => ({
        name: '',
      }))
      setShowForm(false)
      setIsEditing(false)
      await dispatch(fetchCategory())
    }else {
      await dispatch(addCategory(data))
      formik.setValues(() => ({
        name: '',
      }))
      setShowForm(false)
      await dispatch(fetchCategory())
    }
  }
  const onDeleteCategory = async (id: number) =>{
    await dispatch(deleteCategory(id))
    setshowConfirm(false)
    await dispatch(fetchCategory())
  }

  const openConfirm = (id) =>{
    setshowConfirm(true)
    setSelectedId(id)
  }
  const onEditClick = (item: Partial<ICategory>) =>{
    formik.setValues({name: item.name})
    setSelectedId(item.id!)
    setIsEditing(true)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: onSubmit,
    validateOnChange: false,
    validationSchema: toFormikValidationSchema(categorySchema),
  })

  useEffect(() =>{
    dispatch(fetchCategory())
  },[])

  return (
  <section className={styles.categories}>
    <div className={styles.addBtn}>
      <button id={'add'} onClick={() => setShowForm(true)}>
        <AddIcon/>
      </button>
      <Tooltip anchorSelect="#add" place="top"  style={{borderRadius: '5px', background: '#e07d54'}}>
        Əlavə et
      </Tooltip>
    </div>
    <table className={styles.categoriesTable}>
      <thead>
      <tr>
        <th>#№</th>
        <th>Kategoriya</th>
        <th colSpan={2}></th>

      </tr>
      </thead>
      <tbody>
      {!loading && categories.length === 0 &&
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
        :categories.map((category, i) => {
          return (
            <tr key={category.id} >
              <td className={styles.categoriesCol}>{i+1}</td>
              <td className={styles.categoriesCol}>{category.name}</td>
              <td className={styles.categoriesCol}>
                <button
                  id={'edit'}
                  className={styles.categoriesBtn}
                  onClick={() =>  onEditClick(category)}
                  data-tooltip-delay-show={400}
                >
                  <EditIcon/>
                </button>
                <Tooltip anchorSelect="#edit" place="top"  style={{borderRadius: '5px', background: '#e07d54'}}>
                  Düzəliş et
                </Tooltip>
              </td>
              <td className={styles.categoriesCol}>
                <button
                  id={'delete'}
                  className={styles.categoriesBtn}
                  onClick={() =>openConfirm(category.id)}
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
      // width={300}
      // height={200}
      animation={'slideDown'}
      // className={styles.modal}
      // customStyles={{ overflowY: 'scroll', minHeight: '300px'}}
    >
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h4 className={styles.formTitle}>Kategoriya əlave et:</h4>
        <div className={styles.formDivider}></div>
        <div className={styles.formInputs}>
          <label htmlFor='category'>Categoriya adı :</label>
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
      // width={300}
      height={180}
      animation={'slideDown'}
      // className={styles.modal}
      // customStyles={{ overflowY: 'scroll', minHeight: '300px'}}
    >
      <h4 className={styles.confirmTitle}>Kategoriyanı silmək istədiyinizə əminsiniz?</h4>
      <div className={styles.formBtns}>
        <button className={`${styles.formBtn} ${styles.formBtnRight}`} type={'button'} onClick={() => setshowConfirm(false)}>
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

export default Categories
