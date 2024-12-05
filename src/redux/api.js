import axios from "axios";
import { setProducts } from "./productsSlice";

 export const fetchProducts = () => {
  const apiURL = 'https://fakestoreapi.com/products'
  return async (dispatch) => {
    await axios
                .get(apiURL).then((res) => {
                    console.log(res.data);
                    dispatch(setProducts(res.data))
            })
  } 
  
} 

export default fetchProducts