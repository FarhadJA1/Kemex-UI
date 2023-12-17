export interface IProductDescriptions {
  id: number
  productId?: number
  description: string
  descriptionId?: number
  name?: string
}

export interface IProduct {
  id: number
  name: string
  categoryId?:number
  productDescriptions: IProductDescriptions[]
  descriptions?: string[]
}

export interface IIndustrialChemical {
  id: number
  name: string
  appearence: string
  industrialChemicalApplications:{
    id: number
    application: string
  }[],
  applications: string[]
  application: string
  productId?: number
  applicationId?: number
}

export interface ICategory {
  id: number
  name: string
  products: IProduct[]
}

export interface IOrder {
  id?: number
  name: string
  surname: string
  email: string
  phoneNumber?: string
  description: string
  isDone?: boolean
  creationDate?: Date
  productName?:string
  productId?: number
}

export interface IUser {
  email: string
  password: string

}