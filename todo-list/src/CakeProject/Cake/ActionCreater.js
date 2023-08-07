import { BUY_CAKE,BUY_ICECREAM } from "./Actions"

const buyCake=()=>{
    return{
       type:BUY_CAKE
    }
  
}

const buyIcecream=()=>{
    return{
        type:BUY_ICECREAM
    }
}

export  {buyCake,buyIcecream} 