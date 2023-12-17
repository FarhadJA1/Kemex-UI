import dayjs from 'dayjs'
import 'dayjs/locale/az'

export const getToken = () => {
  return localStorage.getItem('token')
}

export const removeToken = () => {
  localStorage.removeItem('token')
}

export const setToken = (value: string) => {
  localStorage.setItem('token', value)
}

export const formatDate = (date?: Date | null, locale: string = 'az'): string => {
  dayjs.locale(locale)
  const monthName = dayjs(date).format('MMMM')
  const capitalizedMonthName = monthName.charAt(0).toUpperCase() + monthName.slice(1)

  return `${dayjs(date).format('DD')} ${capitalizedMonthName} ${dayjs(date).format('YYYY')}`
}

export const joinStringsToArray = (str) => {
  const delimiters = /[,\s]+/;
  return str.split(delimiters)
}

export  const truncateText = (str:string) =>{
  return str.substring(0,120)+'...'
}