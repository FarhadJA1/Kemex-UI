import { defaultCountries, parseCountry } from 'react-international-phone'
import { PhoneNumberUtil } from 'google-libphonenumber'


export const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country)
  return ['az', 'tr', 'ru'].includes(iso2)
})

const phoneUtil = PhoneNumberUtil.getInstance();

export const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false
  }
}