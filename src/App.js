import React, { Component } from 'react'
import List from "./Containers/List/List.js";
import AddButton from "./Components/AddButton/AddButton.js";
import CustomPage from "./Containers/CustomPage/CustomPage.js";
import DelPopup from "./Components/DelPopup/DelPopup.js";
// import socketIOClient from "socket.io-client";
import { connect } from "react-redux";
import { changeMode, getId, loadProducts, requestDel, requestAdd, requestUpdate } from "./Redux/actions.js"

import './App.css';

const mapStateToProps = state => {
  return {
    mode: state.handleMode.mode,
    Products: state.handleProducts.Products,
    current: state.handleProducts.current,

  }
}
const mapDispatchToProps = dispatch => {
  return {
    onChangeMode: (mode)=>dispatch(changeMode(mode)),
    onLoadProducts: (el)=>dispatch(loadProducts(el)),
    onDeleteProduct: (id)=>dispatch(requestDel(id)),
    onAddProduct: (el)=>dispatch(requestAdd(el)),
    onUpdateProduct: (el)=>dispatch(requestUpdate(el)),
    onGetId: (id)=>dispatch(getId(id))
  }
}
class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3001/', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(products => {
      console.log("comming",products)
      this.props.onLoadProducts(products)
    })
    .catch(()=>console.log("Error getAll load"))
  }

  render() {
    return (
      <div className="App">
        <AddButton onChangeMode={this.props.onChangeMode} />
        <List Products={this.props.Products} onChangeMode={this.props.onChangeMode} onGetId={this.props.onGetId}/>
        {(this.props.mode === "add")?
          <CustomPage onChangeMode={this.props.onChangeMode} onHandleAdd={this.props.onAddProduct} _id={(this.props.Products[0])?this.props.Products[this.props.Products.length - 1]._id + 1:0} isAdd={true}/>
        :
          (this.props.mode === "del")?
            <DelPopup onChangeMode={this.props.onChangeMode} current={this.props.current} onDelete={this.props.onDeleteProduct}/>
          :
            (this.props.mode === "modif") ?
              <CustomPage onChangeMode={this.props.onChangeMode} onUpdate={this.props.onUpdateProduct}  element={this.props.Products.filter((el) => el._id === this.props.current)} isAdd={false}/>
          :
          null
        }
        {console.log(this.props)}
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)