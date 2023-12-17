import styles from './Industrial.module.scss'
import AddIcon from '@/components/lib/icons/AddIcon'
import { Tooltip } from 'react-tooltip'
import NoData from '@/components/lib/NoData'
import Loading from '@/components/lib/Loading'
import EditIcon from '@/components/lib/icons/EditIcon'
import DeleteIcon from '@/components/lib/icons/DeleteIcon'
import Rodal from 'rodal'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import {
  addIndustrialChemical,
  deleteIndustrialChemical, editIndustrialChemical,
  fetchIndustrialChemical,
} from '@/store/productReducer.ts'
import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { z } from 'zod'
import { IIndustrialChemical } from '@/store/types.ts'
import { Link } from 'react-router-dom'
import LinkIcon from '@/components/lib/icons/LinkIcon'

const Industrial = () => {

  const [showForm, setShowForm] = useState(false)
  const [showConfirm, setshowConfirm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [inputs, setInputs] = useState([''])
  const {loading,industrialData} = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const industrialSchema = z.object({
    name: z.string({ required_error: 'Məhsul adı məcburidir' }),
    appearence: z.string({ required_error: 'Məhsul forması məcburidir' }),
  })

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
    formik.setFieldValue(`applications[${index}]`, value)
  }
  const handleAddInput = () => {
    setInputs([...inputs, '']) // Add a new empty input
  }

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs]
    newInputs.splice(index, 1)
    setInputs(newInputs)
  }

  const onSubmit = async (data:Partial<IIndustrialChemical>) => {

    if(isEditing){
      await dispatch(editIndustrialChemical({ id:selectedId, name: data.name, appearence: data.appearence }))
      setInputs([''])
      formik.setValues(() => ({
        name: '',
        appearence: '',
        applications:['']
      }))
      setShowForm(false)
      setIsEditing(false)
      await dispatch(fetchIndustrialChemical())
    }else {
      await dispatch(addIndustrialChemical({ name: data.name!, appearence:data.appearence!, applications: data.applications! }))
      setInputs([''])
      formik.setValues(() => ({
        name: '',
        appearence: '',
        applications:['']
      }))
      setShowForm(false)
      await dispatch(fetchIndustrialChemical())
    }
  }

  const onDeleteIndustrial = async (id: number) =>{
    await dispatch(deleteIndustrialChemical(id))
    setshowConfirm(false)
    await dispatch(fetchIndustrialChemical())
  }
  const openConfirm = (id) =>{
    setshowConfirm(true)
    setSelectedId(id)
  }

  const onEditClick = (item: Partial<IIndustrialChemical>) =>{
    formik.setValues({name: item.name, appearence: item.appearence, application: item.industrialChemicalApplications && item?.industrialChemicalApplications[0].application!})
    setSelectedId(item.id!)
    setIsEditing(true)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      appearence: '',
      applications:inputs.map(() => '')
    },
    onSubmit: onSubmit,
    validateOnChange: false,
    validationSchema: toFormikValidationSchema(industrialSchema),
  })

  useEffect(() => {
    dispatch(fetchIndustrialChemical())
  }, [])

  return (
  <section className={styles.industrial}>
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
        <th>Məhsulun adı</th>
        <th>Forma</th>
        {/* <th>Açıqlama</th> */}
        <th colSpan={3}></th>
      </tr>
      </thead>
      <tbody>
      {!loading && industrialData.length === 0 &&
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
        :industrialData.map((item, i) => {
          return (
            <tr key={item.id} >
              <td className={styles.categoriesCol}>{i+1}</td>
              <td className={styles.categoriesCol}>{item.name}</td>
              <td className={styles.categoriesCol}>{item.appearence}</td>
              {/* <td className={styles.categoriesCol}>{item.industrialChemicalApplications.map(item => item.application).join(',')}</td> */}
              <td className={styles.categoriesCol}>
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
              <td className={styles.categoriesCol}>
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
              <td className={styles.productsCol}>
                <Link to={`/admin/industrial/${item.id}`}
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
      visible={showForm ||isEditing}
      onClose={() => {
        setShowForm(false)
        setIsEditing(false)
        setInputs([''])
        formik.setValues(() => ({
          name: '',
          applications: [''],
        }))
      }}
      width={500}
      height={400}
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
          <label htmlFor='name'>Məhsul adı :</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder={'yazın'}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <div className={styles.formFieldError}>{formik.errors.name}</div>
          )}
        </div>
        <div className={styles.formInputs}>
          <label htmlFor='apperance'>Forması :</label>
          <input
            type='text'
            name='appearence'
            id='apperance'
            placeholder={'yazın'}
            value={formik.values.appearence}
            onChange={formik.handleChange}
          />
          {formik.errors.appearence && (
            <div className={styles.formFieldError}>{formik.errors.appearence}</div>
          )}
        </div>
        {!isEditing && inputs.map((input, index) => (
        <div key={index} className={styles.formInputs}>
          <label htmlFor={`application-${index}`}>Detal adı :</label>
          <div className={styles.formDetails}>
            <input
              type='text'
              name={`applications[${index}]`}
              id={`application-${index}`}
              placeholder={'yazın'}
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            {formik.errors.application && (
              <div className={styles.formFieldError}>{formik.errors.applications}</div>
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
      onClose={() => setshowConfirm(false)}
      height={180}
      animation={'slideDown'}
    >
      <h4 className={styles.confirmTitle}>Məhsulu silmək istədiyinizə əminsiniz?</h4>
      <div className={styles.formBtns}>
        <button className={`${styles.formBtn} ${styles.formBtnRight}`} type={'button'} onClick={() => setshowConfirm(false)}>
          Xeyr
        </button>
        <button
          className={styles.formBtn} type={'button'}
          onClick={() => onDeleteIndustrial(selectedId)}
        >
          Bəli
        </button>
      </div>
    </Rodal>
  </section>
  )
}

export default Industrial
