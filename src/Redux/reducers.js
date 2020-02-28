import { CHANGE_MODE, DELETE_PRODUCT, GET_ID, ADD_PRODUCT, UPDATE_PRODUCT, LOAD_PRODUCTS, REQUEST_DEL_SUCCES, REQUEST_ADD_SUCCES, REQUEST_UPDATE_SUCCES} from "./constants.js"
const initialStateMode = {
  mode:""
}

export const handleMode = (state=initialStateMode,action={}) => {
  switch (action.type) {
    case CHANGE_MODE:
      return Object.assign({},state,{mode:action.payload})
    default:
      return state;
  }
}

const initialStateProducts = {
  Products:[],
  current:0
}
export const handleProducts = (state=initialStateProducts,action={}) => {
  switch (action.type) {
    case LOAD_PRODUCTS:{
      return Object.assign({}, state, { Products: action.payload, current: 0})
    }
    case REQUEST_DEL_SUCCES:{
      let newState = state.Products
      newState = newState.filter((el, i) => el._id !== state.current)
      return Object.assign({},state,{Products:newState,current:0})
    }
    case REQUEST_ADD_SUCCES:{
      let newState = state.Products
      newState.push(action.payload)
      return Object.assign({}, state, { Products: newState, current: 0})
    }
    case REQUEST_UPDATE_SUCCES:{
      let newState = state.Products
      newState = newState.map((el, i) => {
        if (el._id === action.payload._id) {
          return action.payload
        }
        return el
      })
      return Object.assign({}, state, { Products: newState,current: 0})
    }
    case GET_ID:
      return Object.assign({},state,{current:action.payload})
    default:
      return state;
  }
}