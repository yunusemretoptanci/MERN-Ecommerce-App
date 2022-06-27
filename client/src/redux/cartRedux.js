import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products: [],
        quantity :0,
        total: 0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity +=1;
            /* state.products.forEach(product => {
               if( product._id===action.payload._id){
                product.quantity+=action.payload._id
               }else{
                state.products.push(action.payload);
               }
            }); */
            state.products.push(action.payload);
            state.total +=action.payload.price*action.payload.quantity;
            
            
        },
        deleteProduct: (state, action) => {
            state.quantity -= 1;
            state.products.splice(
              state.products.findIndex((item) => item._id === action.payload.id),
              1
            );
            state.total -= action.payload.price * action.payload.quantity;
          },

          updateProduct: (state, action) => {
            /* const index= state.products.findIndex((item) => item._id === action.payload.id); */
              /* state.products[index].quantity+=action.payload.quantity; */
              /* console.log(state.products[index].quantity); */
              state.products.forEach(function(item, i) { if (item._id == action.payload._id) state.products[i].quantity+=action.payload.quantity;
              ; });
              state.total += action.payload.price * action.payload.quantity;
          },
    }
});

export const {addProduct,deleteProduct,updateProduct}=cartSlice.actions
export default cartSlice.reducer;