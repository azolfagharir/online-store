import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchProductsAPI  } from "./ProductsApi";

export const fetchProducts = createAsyncThunk(
    "/products/fetchproducts",
    async()=>{
        try{
            return await fetchProductsAPI();  
        }
        catch(error){
            return error.message;
        }
    }
);
const initialState = {
    Products:[],
    loading:false,
    error:null,
}

const productsSlice = createSlice({
    name:"Products",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(fetchProducts.pending, (state) =>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false,
            state.Products = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.loading =false,
            state.error =  action.payload;
        })
    }
})


export default productsSlice.reducer;