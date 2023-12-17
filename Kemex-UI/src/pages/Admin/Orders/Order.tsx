import styles from './Order.module.scss'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts'
import { useEffect, useState } from 'react'
import { checkOrder, deleteOrder, fetchArchive, fetchOrder } from '@/store/productReducer.ts'
import DoubleArrowIcon from '@/components/lib/icons/DoubleArrowIcon'
import Rodal from 'rodal'
import { IOrder } from '@/store/types.ts'
import NoData from '@/components/lib/NoData'
import Loading from '@/components/lib/Loading'
import EnvelopeIcon from '@/components/lib/icons/EnvelopeIcon'
import EnvelopeOpenIcon from '@/components/lib/icons/EnvelopeOpenIcon'
import { formatDate } from '@/utils/helperFunctions.ts'
import { Tooltip } from 'react-tooltip'
import DeleteIcon from '@/components/lib/icons/DeleteIcon'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Orders = () => {
  const [showDetail, setShowDetail] = useState(false)
  const [order, setOrder] = useState<IOrder | undefined>
  (undefined)
  const [showConfirm, setshowConfirm] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const { orders, isDoneLoading, loading, archive } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const onOpenDetail = (value: IOrder) => {
    setShowDetail(true)
    setOrder(value)
  }

  const readOrder = async (id: number) => {
    await dispatch(checkOrder(id))
  }

  const onDeleteOrder = async (id: number) => {
    await dispatch(deleteOrder(id))
    await dispatch(fetchOrder())
    dispatch(fetchArchive())
    setshowConfirm(false)
  }
  const openConfirm = (id) => {
    setshowConfirm(true)
    setSelectedId(id)
  }

  useEffect(() => {
    dispatch(fetchOrder())
    dispatch(fetchArchive())
  }, [])
  useEffect(() => {
    if (!isDoneLoading) {
      dispatch(fetchOrder())
    }

  }, [isDoneLoading])

  return (
    <section className={styles.orders}>
      <Tabs style={{margin: '1rem auto', width:'95%',}}>
        <TabList>
          <Tab>Sifarişlər</Tab>
          <Tab>Arxiv</Tab>
        </TabList>

        <TabPanel>
          <table className={styles.ordersTable}>
            <thead>
            <tr>
              <th>#№</th>
              <th>Ad</th>
              <th>Soyad</th>
              <th>E-poçt</th>
              <th>Telefon</th>
              <th>Tarix</th>
              <th colSpan={3}>Tənzimləmələr</th>

            </tr>
            </thead>
            <tbody>
            {!loading && orders.length === 0 &&
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
              : orders.map((order, i) => {
                return (
                  <tr key={order.id} className={order.isDone ? `${styles.disabled}` : ''}>
                    <td className={styles.orderCol}>{i + 1}</td>
                    <td className={styles.orderCol}>{order.name}</td>
                    <td className={styles.orderCol}>{order.surname}</td>
                    <td className={styles.orderCol}>{order.email}</td>
                    <td className={styles.orderCol}>{order.phoneNumber}</td>
                    <td className={styles.orderCol}>{formatDate(order.creationDate)}</td>
                    <td className={styles.orderCol}>
                      <button
                        id={'more'}
                        className={styles.orderMoreBtn}
                        onClick={() => onOpenDetail(order)}
                        data-tooltip-delay-show={400}
                      >
                        <DoubleArrowIcon />
                      </button>
                      <Tooltip anchorSelect='#more' place='top' style={{ borderRadius: '5px', background: '#e07d54' }}>
                        Ətraflı baxış
                      </Tooltip>
                    </td>
                    <td className={styles.orderCol}>
                      <button
                        id={'read'}
                        className={styles.orderReadBtn}
                        onClick={() => readOrder(order.id!)}
                        disabled={order.isDone}
                        data-tooltip-delay-show={400}
                      >
                        {!order.isDone ? <EnvelopeIcon width={'16'} height={'16'} /> : <EnvelopeOpenIcon />}
                      </button>
                      <Tooltip anchorSelect='#read' place='top' style={{ borderRadius: '5px', background: '#e07d54' }}>
                        Oxunmuş kimi qeyd edin
                      </Tooltip>
                    </td>
                    <td className={styles.categoriesCol}>
                      <button
                        id={'delete'}
                        className={styles.categoriesBtn}
                        onClick={() => openConfirm(order.id)}
                        data-tooltip-delay-show={400}
                      >
                        <DeleteIcon />
                      </button>
                      <Tooltip anchorSelect='#delete' place='top' style={{ borderRadius: '5px', background: '#e07d54' }}>
                        Silin
                      </Tooltip>
                    </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </TabPanel>
        <TabPanel>
          <table className={styles.ordersTable}>
            <thead>
            <tr>
              <th>#№</th>
              <th>Ad</th>
              <th>Soyad</th>
              <th>E-poçt</th>
              <th>Telefon</th>
              <th>Tarix</th>
            </tr>
            </thead>
            <tbody>
            {!loading && archive.length === 0 &&
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
              : archive.map((item, i) => {
                return (
                  <tr key={item.id} >
                    <td className={styles.orderCol}>{i + 1}</td>
                    <td className={styles.orderCol}>{item.name}</td>
                    <td className={styles.orderCol}>{item.surname}</td>
                    <td className={styles.orderCol}>{item.email}</td>
                    <td className={styles.orderCol}>{item.phoneNumber}</td>
                    <td className={styles.orderCol}>{formatDate(item.creationDate)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </TabPanel>
      </Tabs>

      <Rodal
        visible={showDetail}
        onClose={() => setShowDetail(false)}
        width={800}
        height={300}
        animation={'slideDown'}
        className={styles.modal}
        customStyles={{ overflowY: 'scroll', minHeight: '300px' }}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalContentRow}>
            <div className={styles.modalContentCol}>
              <span>Ad: </span>
              <span>{order?.name}</span>
            </div>
            <div className={styles.modalContentCol}>
              <span>Soyad:</span>
              <span>{order?.surname}</span>
            </div>
          </div>
          <div className={styles.modalContentRow}>
            <div className={styles.modalContentCol}>
              <span>E-poçt:</span>
              <span>{order?.email}</span>
            </div>
            <div className={styles.modalContentCol}>
              <span>Telefon:</span>
              <span>{order?.phoneNumber}</span>
            </div>
          </div>
          <div>{order?.description}</div>
        </div>
      </Rodal>
      <Rodal
        visible={showConfirm}
        onClose={() => setshowConfirm(false)}
        height={180}
        animation={'slideDown'}
      >
        <h4 className={styles.confirmTitle}>Sifarişi arxivə göndərmək istədiyinizə əminsiniz?</h4>
        <div className={styles.formBtns}>
          <button className={`${styles.formBtn} ${styles.formBtnRight}`} type={'button'}
                  onClick={() => setshowConfirm(false)}>
            Xeyr
          </button>
          <button
            className={styles.formBtn} type={'button'}
            onClick={() => onDeleteOrder(selectedId)}
          >
            Bəli
          </button>
        </div>
      </Rodal>
    </section>
  )
}

export default Orders
