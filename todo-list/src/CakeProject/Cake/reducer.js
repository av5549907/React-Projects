
import {BUY_CAKE,BUY_ICECREAM} from './Actions'
import { buyCake,buyIcecream } from './ActionCreater'
const initialState={
    numOfCake:10 ,
    numOfIcecream:20
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCake:state.numOfCake-1
        }
        case BUY_ICECREAM:return{
            ...state,
            numOfIcecream:state.numOfIcecream-1
        }

        default:return state;
    }
      
}

export default reducer