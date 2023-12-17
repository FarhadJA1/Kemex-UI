
import * as sonner from 'sonner'



export const showSuccessMessage = () => {
  sonner.toast.success('Mesaj uğurla göndərildi')
}

export const showSuccessAlert = (msg: string) => {
  sonner.toast.success(msg)
}

export const showErrorMessage = () => {
  sonner.toast.error('Əməliyyat uğursuz oldu')
}