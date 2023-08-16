import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER ,BUTTON_CLICKED} from "./ActionType"

const initialstate = {
    loading: true,
    userlist: [],
    userobj: {},
    errmessage: '',
    clickButton: false
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUTTON_CLICKED:return{
             ...state,
            clickButton:!state.clickButton 
           }
           break;
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
            break;
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
            break;
        case GET_USER_LIST:
            return {
                loading: false,
                errmessage: '',
                userlist:action.payload,
                userobj:{}
            }
            break;
            case DELETE_USER:return{
                ...state,
                loading:false
            }
            break;
            case ADD_USER:return{
                ...state,
                loading:false
            }
            break;
            case UPDATE_USER:return{
                ...state,
                loading:false
            }
            break;
            case GET_USER_OBJ:return{
                ...state,
                loading:false,
                userobj:action.payload
            }
            break;

        default: return state
    }
}