import { buttonClicked } from "./Action";
import { BUTTON_CLICKED } from "./ActionType";
initialclickSatte={
   buttonClicked:false
}

const buttonReducer=(state=initialclickSatte,action)=>{
    switch(action.type){
        case BUTTON_CLICKED: return{
            buttonClicked:!state.buttonClicked
        }
        default: return state
    }
}