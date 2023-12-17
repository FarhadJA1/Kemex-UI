import styles from './IndustrialDetail.module.scss'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { z } from 'zod'
import { IIndustrialChemical } from '@/store/types.ts'
import {
  addIndustrialDetail, deleteIndustrialDetail, editIndustrialDetail, getIndustrialById,
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

const IndustrialDetail = () => {
  const [showForm, setShowForm] = useState(false)
  const [showConfirm, setshowConfirm] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const {loading, industrial} = useAppSelector(state => state.products)
  const {id} = useParams()
  const dispatch = useAppDispatch()


  const detailSchema = z.object({
    application: z.string({ required_error: 'Detal adı məcburidir' }),

  })
  const onSubmit = async (data:Partial<IIndustrialChemical>) => {
    if(isEditing){
      await dispatch(editIndustrialDetail({ applicationId:data.applicationId, application: data.application }))
      formik.setValues(() => ({
        application: '',
      }))
      setShowForm(false)
      setIsEditing(false)
      dispatch(getIndustrialById(Number(id)))
    }else {
      await dispatch(addIndustrialDetail({ productId:Number(id), application: data.application }))
      dispatch(getIndustrialById(Number(id)))
      formik.setValues(() => ({
        application: '',
      }))
      setShowForm(false)
    }
  }
  const onDeleteProductDescription = async (descId: number) =>{
    await dispatch(deleteIndustrialDetail(descId))
    dispatch(getIndustrialById(Number(id)))
    setshowConfirm(false)
  }
  const openConfirm = (id) =>{
    setshowConfirm(true)
    setSelectedId(id)
  }
  const onEditClick = (item: Partial<IIndustrialChemical>) =>{
    formik.setValues({applicationId: item.id, application: item.application})
    setSelectedId(item.id!)
    setIsEditing(true)
  }

  const formik = useFormik({
    initialValues: {
      applicationId: 0,
      application: '',
    },
    onSubmit: onSubmit,
    validateOnChange: false,
    validationSchema: toFormikValidationSchema(detailSchema),
  })

  useEffect(() => {
    dispatch(getIndustrialById(Number(id)))
  }, [])


  return (
    <section className={styles.detail}>
      <div className={styles.addBtn}>
        <BreadCrumbs label={industrial?.name!} headPath={'/admin'} secondPath={'/admin/industrial'} secondLabel={'Sənaye'}/>
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
        {!loading && industrial?.industrialChemicalApplications &&  industrial?.industrialChemicalApplications.length === 0 &&
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
          :industrial?.industrialChemicalApplications?.map((item, i) => {
            return (
              <tr key={item.id} >
                <td className={styles.detailCol}>{i+1}</td>
                <td className={styles.detailCol}>{item.application}</td>
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
            <label htmlFor='application'>Detal adı :</label>
            <input
              type='text'
              name='application'
              id='application'
              placeholder={'yazın'}
              value={formik.values.application}
              onChange={formik.handleChange}
            />
            {formik.errors.application && (
              <div className={styles.formFieldError}>{formik.errors.application}</div>
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

export default IndustrialDetail
