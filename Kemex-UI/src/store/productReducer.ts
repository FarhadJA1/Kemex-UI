import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICategory, IIndustrialChemical, IOrder, IProduct, IProductDescriptions } from '@/store/types.ts'
import { showErrorMessage, showSuccessAlert } from '@/constants/notifications.ts'
import baseService from '@/utils/baseService.ts'
import swal from 'sweetalert';


interface IProductsState {
  data: ICategory[]
  categories: ICategory[]
  industrialData: IIndustrialChemical[]
  industrial: IIndustrialChemical | undefined
  orders: IOrder[]
  archive: IOrder[]
  products: IProduct[]
  product: IProduct | undefined
  loading: boolean
  error: null | string | undefined
  isDoneLoading: boolean
  descLoading: boolean
  dataLoading: boolean
}

const initialState: IProductsState = {
  data: [],
  loading: false,
  error: null,
  categories:[],
  industrialData:[],
  industrial: undefined,
  orders: [],
  archive:[],
  products:[],
  product:undefined,
  isDoneLoading: false,
  dataLoading: false,
  descLoading: false
}

export const fetchCategory = createAsyncThunk(
  'category/fetchCategory',
  async () => {
    const res = await baseService.get(`/Category`)
    return res.data
  },
)

export const addCategory = createAsyncThunk(
  'category/addCategory',
  async (data: Partial<ICategory>) => {
    const res = await baseService.post(`/Category`, data)
    return res.data
  },
)
export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async (id: number) => {
    const res = await baseService.delete(`/Category/${id}`)
    return res.data
  },
)
export const editCategory = createAsyncThunk(
  'category/editCategory',
  async (data: Partial<ICategory>) => {
    const res = await baseService.put(`/Category`, data)
    return res.data
  },
)
export const fetchProductsByCategory = createAsyncThunk(
  'category/fetchProducts',
  async (id: number) => {
    const res = await baseService.get(`/Category/${id}`)
    return res.data
  },
)
export const fetchProductById = createAsyncThunk(
  'category/fetchProductById',
  async (id: number) => {
    const res = await baseService.get(`/Product/${id}`)
    return res.data
  },
)

export const addProduct = createAsyncThunk(
  'category/addProduct',
  async (data: Partial<IProduct>) => {
    const res = await baseService.post(`/Product`, data)
    return res.data
  },
)

export const editProduct = createAsyncThunk(
  'category/editProduct',
  async (data: Partial<ICategory>) => {
    const res = await baseService.put(`/Product`, data)
    return res.data
  },
)

export const deleteProduct = createAsyncThunk(
  'category/deleteProduct',
  async (id: number) => {
    const res = await baseService.delete(`/Product/${id}`)
    return res.data
  },
)

export const addProductDescription = createAsyncThunk(
  'category/addProductDescription',
  async (data: Partial<IProductDescriptions>) => {
    const res = await baseService.post(`/Product/ProductDescription`, data)
    return res.data
  },
)
export const editProductDescription = createAsyncThunk(
  'category/editProductDescription',
  async (data: Partial<IProductDescriptions>) => {
    const res = await baseService.put(`/Product/ProductDescription`, data)
    return res.data
  },
)
export const deleteProductDescription = createAsyncThunk(
  'category/deleteProductDescription',
  async (id: number) => {
    const res = await baseService.delete(`/Product/ProductDescription/${id}`)
    return res.data
  },
)
export const fetchIndustrialChemical = createAsyncThunk(
  'category/fetchIndustrialChemical',
  async () => {
    const res = await baseService.get(`/IndustrialChemical`)
    return res.data
  },
)

export const addIndustrialChemical = createAsyncThunk(
  'category/addIndustrialChemical',
  async (data: Partial<IIndustrialChemical>) => {
    const res = await baseService.post(`/IndustrialChemical`, data)
    return res.data
  },
)

export const deleteIndustrialChemical = createAsyncThunk(
  'category/deleteIndustrialChemical',
  async (id: number) => {
    const res = await baseService.delete(`/IndustrialChemical/${id}`)
    return res.data
  },
)
export const editIndustrialChemical = createAsyncThunk(
  'category/editIndustrialChemical',
  async (data: Partial<IIndustrialChemical>) => {
    const res = await baseService.put(`/IndustrialChemical`,data)
    return res.data
  },
)

export const getIndustrialById = createAsyncThunk(
  'category/getIndustrialById',
  async (id: number) => {
    const res = await baseService.get(`/IndustrialChemical/${id}`)
    return res.data
  },
)

export const addIndustrialDetail = createAsyncThunk(
  'category/addIndustrialDetail',
  async (data: Partial<IIndustrialChemical>) => {
    const res = await baseService.post(`/IndustrialChemical/Application`, data)
    return res.data
  },
)

export const editIndustrialDetail = createAsyncThunk(
  'category/editIndustrialDetail',
  async (data: Partial<IIndustrialChemical>) => {
    const res = await baseService.put(`/IndustrialChemical/Application`, data)
    return res.data
  },
)

export const deleteIndustrialDetail = createAsyncThunk(
  'category/deleteIndustrialDetail',
  async (id: number) => {
    const res = await baseService.delete(`/IndustrialChemical/Application/${id}`)
    return res.data
  },
)
export const sendOrder = createAsyncThunk(
  'category/sendOrder',
  async (order: IOrder) => {
    const res = await baseService.post(`/Order`, order)
    return res.data
  },
)
export const askForPrice = createAsyncThunk(
  'category/askForPrice',
  async (order: IOrder) => {
    const res = await baseService.post(`/Order/askForPrice`, order)
    return res.data
  },
)
export const fetchOrder = createAsyncThunk(
  'category/fetchOrder',
  async () => {
    const res = await baseService.get(`/Order`)
    //console.log(res);
    
    return res.data
  },
)
export const fetchArchive = createAsyncThunk(
  'category/fetchArchive',
  async () => {
    const res = await baseService.get(`/Order/Archive`)
    return res.data
  },
)
export const checkOrder = createAsyncThunk(
  'category/checkOrder',
  async (id: number) => {
    const res = await baseService.put(`/Order/${id}`)
    return res.data
  },
)

export const deleteOrder = createAsyncThunk(
  'category/deleteOrder',
  async (id: number) => {
    const res = await baseService.delete(`/Order/${id}`)
    return res.data
  },
)

export const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loading = false
      state.categories = action.payload
    })
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = true
      state.dataLoading = false

    })
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action:any) => {
      state.loading = false
      state.dataLoading = false
      state.data = action.payload
      state.products = action.payload[0].products
    })
    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      state.loading = false
      state.dataLoading = false
      state.error = action.error.message
    })
    builder.addCase(fetchIndustrialChemical.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchIndustrialChemical.fulfilled, (state, action) => {
      state.loading = false
      state.industrialData = action.payload
    })
    builder.addCase(fetchIndustrialChemical.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })

    builder.addCase(sendOrder.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(sendOrder.fulfilled, (state) =>{
      state.loading = false
      swal({
        title: "Müraciət uğurla göndərildi!",
        // text: "You clicked the button!",
        icon: "success",
        buttons: ['Bağla', false],
        timer: 2000
      });

      // showSuccessMessage()
    })
    builder.addCase(sendOrder.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    //askforprice

    builder.addCase(askForPrice.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(askForPrice.fulfilled, (state) =>{
      state.loading = false
      swal({
        title: "Müraciət uğurla göndərildi!",
        // text: "You clicked the button!",
        icon: "success",
        buttons: ['Bağla', false],
        timer: 2000
      });

      // showSuccessMessage()
    })
    builder.addCase(askForPrice.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(fetchOrder.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(fetchOrder.fulfilled, (state, action) =>{
      state.loading = false
      state.orders = action.payload
    })
    builder.addCase(fetchOrder.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(fetchArchive.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(fetchArchive.fulfilled, (state, action) =>{
      state.loading = false
      state.archive = action.payload
    })
    builder.addCase(fetchArchive.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(deleteOrder.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(deleteOrder.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Sifariş uğurla arxivə göndərildi')
    })
    builder.addCase(deleteOrder.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(checkOrder.pending, (state) => {
      // state.loading = true
      state.isDoneLoading = true
    })
    builder.addCase(checkOrder.fulfilled, (state) => {
      // state.loading = false
      state.isDoneLoading = false
    })
    builder.addCase(checkOrder.rejected, (state, action) => {
      // state.loading = false
      state.isDoneLoading = false
      state.error = action.error.message
    })

    builder.addCase(addCategory.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(addCategory.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Yeni Kategoriya Əlavə edildi')
    })
    builder.addCase(addCategory.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(deleteCategory.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(deleteCategory.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Kategoriya uğurla silindi')
    })
    builder.addCase(deleteCategory.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(editCategory.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(editCategory.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Kategoriya uğurla dəyişdirildi')
    })
    builder.addCase(editCategory.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(addProduct.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(addProduct.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Məhsul uğurla əlavə olundu')
    })
    builder.addCase(addProduct.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(editProduct.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(editProduct.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Məhsul uğurla dəyişdirildi')
    })
    builder.addCase(editProduct.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(deleteProduct.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(deleteProduct.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Məhsul uğurla silindi')
    })
    builder.addCase(deleteProduct.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(addProductDescription.pending, (state) =>{
      state.loading = true
      state.descLoading = true
    })
    builder.addCase(addProductDescription.fulfilled, (state) =>{
      state.loading = false
      state.descLoading = false
      showSuccessAlert('Məhsul detalı uğurla əlavə olundu')
    })
    builder.addCase(addProductDescription.rejected, (state, action) =>{
      state.loading = false
      state.descLoading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(deleteProductDescription.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(deleteProductDescription.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Məhsul detalı uğurla silindi')
    })
    builder.addCase(deleteProductDescription.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(fetchProductById.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(fetchProductById.fulfilled, (state, action) =>{
      state.loading = false
      state.product =action.payload
    })
    builder.addCase(fetchProductById.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(editProductDescription.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(editProductDescription.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Məhsul detalı dəyişdirildi')
    })
    builder.addCase(editProductDescription.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(addIndustrialChemical.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(addIndustrialChemical.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Məhsul əlavə olundu')
    })
    builder.addCase(addIndustrialChemical.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(deleteIndustrialChemical.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(deleteIndustrialChemical.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Məhsul uğurla silindi')
    })
    builder.addCase(deleteIndustrialChemical.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(editIndustrialChemical.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(editIndustrialChemical.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Məhsul uğurla dəyişdirildi')
    })
    builder.addCase(editIndustrialChemical.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(getIndustrialById.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(getIndustrialById.fulfilled, (state, action) =>{
      state.loading = false
      state.industrial =action.payload
      // showSuccessAlert('Məhsul uğurla dəyişdirildi')
    })
    builder.addCase(getIndustrialById.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(addIndustrialDetail.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(addIndustrialDetail.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Detal uğurla əlavə olundu')
    })
    builder.addCase(addIndustrialDetail.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(editIndustrialDetail.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(editIndustrialDetail.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Detal uğurla dəyişdirildi')
    })
    builder.addCase(editIndustrialDetail.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })

    builder.addCase(deleteIndustrialDetail.pending, (state) =>{
      state.loading = true
    })
    builder.addCase(deleteIndustrialDetail.fulfilled, (state) =>{
      state.loading = false
      showSuccessAlert('Detal uğurla silindi')
    })
    builder.addCase(deleteIndustrialDetail.rejected, (state, action) =>{
      state.loading = false
      state.error = action.error.message
      showErrorMessage()
    })
  },
})

export const {  } = productReducer.actions
export default productReducer.reducer