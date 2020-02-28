import { CHANGE_MODE, DELETE_PRODUCT, GET_ID, UPDATE_PRODUCT, ADD_PRODUCT, LOAD_PRODUCTS, REQUEST_ADD_PENDING, REQUEST_ADD_SUCCES, REQUEST_DEL_FAILED, REQUEST_UPDATE_FAILED, REQUEST_ADD_FAILED, REQUEST_UPDATE_PENDING, REQUEST_DEL_PENDING, REQUEST_DEL_SUCCES,REQUEST_UPDATE_SUCCES } from "./constants.js";

export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: mode 
})
export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id 
})
export const getId = (id) => ({
  type: GET_ID,
  payload: id 
})
export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products 
})
export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product 
})
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product 
})
export const requestAdd = (product) => (dispatch) => {
  console.log(1)
  fetch('http://localhost:3001/add', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(product)
  })
    .then(() => dispatch({type:REQUEST_ADD_SUCCES,payload:product}))
    .catch(() => dispatch({ type: REQUEST_ADD_FAILED}))
}
export const requestDel = (id) => (dispatch) => {
  console.log(2)
   fetch('http://localhost:3001/del/'+ id, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(() => dispatch({type:REQUEST_DEL_SUCCES}))
    .catch(() => dispatch({ type: REQUEST_DEL_FAILED }))
}
export const requestUpdate = (product) => (dispatch) => {
  console.log(3)
   fetch('http://localhost:3001/update', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
    .then(() => (dispatch({ type: REQUEST_UPDATE_SUCCES, payload: product}))? true :null)
    .catch(() => dispatch({ type: REQUEST_UPDATE_FAILED}))
}