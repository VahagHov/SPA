import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice( {
    name: "Product" ,
    initialState: {
        items: [] ,
    } ,

    reducers: {
        setProducts: (state , action) => {
            state.items = action.payload
        } ,

        deleteProduct: (state , action) => {
            state.items = state.items.filter(product => product.id != action.payload)
        } ,

        handleLike: (state, action) => {
            const product = state.items.find(item => item.id === action.payload)
            if (product) {
                product.liked = !product.liked
            }
        }
    }
})

export const {setProducts , deleteProduct , handleLike} = productsSlice.actions
export default productsSlice.reducer