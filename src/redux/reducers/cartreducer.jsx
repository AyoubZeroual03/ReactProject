import { createSlice } from "@reduxjs/toolkit";
const cartreducer =createSlice({
name:"cart",
initialState:{
    total:0,
    qq:0,
    cart:[]
},
reducers:{
    addtocart: (state,{payload})=>{
        const exist = state.cart.find((item)=> item.id === payload.id )

        if(exist){
            const newcart = state.cart.map(
                (item)=>{
                    if(item.id === payload.id ){
                        item.qte++
                    }
                    return item
                }


            )
                return void(state.cart=newcart,state.total += payload.price  
                    )
        }else{
            return{...state,cart:[...state.cart,payload] ,total:state.total+payload.price}
        }



    },removetocart:(state,{payload})=>{

        state.cart=state.cart.filter((item)=>{
                return item.id !== payload.id
            })

                       state.total -= payload.price*payload.qte 

                       if(state.cart.length==0){
                        state.total=0
                    }

        

        
    },totalamount:(state,{payload})=>{
        const addNumbers = (previousResult, currentItem) => {
            return previousResult + currentItem.price*currentItem.qte
          }
            return {...state,total : state.cart.reduce(addNumbers , 0)}
    },additemtocart:(state,{payload})=>{

                    state.cart = state.cart.map(
                        (item)=>{
                             if(item.id=== payload.id){
                                 return {...item,qte:item.qte+1}
                             }else  return item
                             
                        }   
                    )
               state.total += payload.price  

                        
                
        
    },removeitemtocart:(state,{payload})=>{
                            if(payload.qte!==1){
                        state.cart = state.cart.map(
                        (item)=>{
                            
                             if(item.id=== payload.id){
                                 return {...item,qte:item.qte-1}
                             }else  return item
                             
                        }   
                    )
                         }else{
                   state.cart = state.cart.filter((item)=>{
                        return item.id !== payload.id
                    
                    })
                }

                    state.total -= payload.price  
                    if(state.cart.length==0){
                        state.total=0
                    }

    }  
}

})


export const {addtocart,removetocart,totalamount,additemtocart,removeitemtocart}= cartreducer.actions;
export default cartreducer.reducer;

