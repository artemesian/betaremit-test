import React, { Component } from 'react'
import './CustomPage.scss'

export default class CustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current:(typeof (this.props._id) === "number")?{_id:this.props._id,available:true}:this.props.element[0]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'radio' ? JSON.parse(target.value) :target.type === 'number'? Number(target.value):target.value
    const name = target.name;
    const current = this.state.current
    current[name] = value
    this.setState({
      current: current
    });
  }
  render() {
    return (
      <div id="custompage-container">
        {(this.props.isAdd)?
          <form onSubmit={(e) => { e.preventDefault(); this.props.onHandleAdd(this.state.current); this.props.onChangeMode("");}} method="POST" id="custompage-wrapper">
          <button className="cancel" onClick={() => this.props.onChangeMode("")}>&times;</button>
          <input type="text" className="name" name="name" placeholder="Name" required onChange={this.handleInputChange} />
          <input type="text" className="type" name="type" placeholder="Type" required onChange={this.handleInputChange} />
          <input type="number" className="price" step="any" name="price" placeholder="Price" required onChange={this.handleInputChange} />
          <input type="number" min="0" max="5" step="any" className="rating" name="rating" placeholder="Rating" required onChange={this.handleInputChange} />
          <input type="number" className="warranty" step="0.5" name="warranty_years" placeholder="Years of warranty" required onChange={this.handleInputChange} />
          <div className="available-container">
            <label htmlFor="available">Available
            <input type="radio" id="available" name="available" value={true} required defaultChecked onChange={this.handleInputChange} />
            </label>
            <label htmlFor="expired">Expired
            <input type="radio" id="expired" name="available" value={false} required onChange={this.handleInputChange} />
            </label>
          </div>
          <input type="submit" value="Save" className="save" />
        </form>
        :
        <form onSubmit={(e) => { e.preventDefault(); this.props.onUpdate(this.state.current); this.props.onChangeMode("");}} method="POST" id="custompage-wrapper">
          <button className="cancel" onClick={() => this.props.onChangeMode("")}>&times;</button>
          <input type="text" className="name" name="name" placeholder="Name" defaultValue={this.props.element[0].name} onChange={this.handleInputChange} />
          <input type="text" className="type" name="type" placeholder="Type" defaultValue={this.props.element[0].type} onChange={this.handleInputChange} />
          <input type="number" className="price" name="price" placeholder="Price" defaultValue={this.props.element[0].price} onChange={this.handleInputChange} />
          <input type="number" className="rating" name="rating" placeholder="Rating" defaultValue={this.props.element[0].rating} onChange={this.handleInputChange} />
          <input type="number" className="warranty" name="warranty_years" placeholder="Years of warranty" defaultValue={this.props.element[0].warranty_years} onChange={this.handleInputChange} />
          <div className="available-container">
            <label htmlFor="available">Available
              <input type="radio" id="available" name="available" defaultValue="true"  checked={(this.props.element[0].available===true)? true:false} onChange={this.handleInputChange} />
            </label>
            <label htmlFor="expired">Expired
              <input type="radio" id="expired" name="available" defaultValue="false" checked={(this.props.element[0].available===false)? true:false} onChange={this.handleInputChange} />
            </label>
          </div>
          <input type="submit" value="Save" className="save" />
        </form>
        }
        {console.log(this.state)}
      </div>
    )
  }
}
