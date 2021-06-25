import { Component } from 'react';

export class CarEditRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      carMake: this.props.car.carMake,
      carModel: this.props.car.carModel,
      carYear: this.props.car.carYear,
      carColor: this.props.car.carColor,
      carPrice: this.props.car.carPrice,  
    };
  }
  
  // Use this form of method declaration when the event handler needs to reference 'this'
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  updateCar = () => {
    this.props.onSaveClick({
      ...this.state,
      id: this.props.car.id,
    });
  }

  render () {
    return (
        <tr>
          <td>{this.props.car.id}</td>
          <td><input type="text" value={this.state.carMake} onChange={this.change} name="carMake" /></td>
          <td><input type="text" value={this.state.carModel} onChange={this.change} name="carModel" /></td>
          <td><input type="text" value={this.state.carYear} onChange={this.change} name="carYear" /></td>
          <td><input type="text" value={this.state.carColor} onChange={this.change} name="carColor" /></td>
          <td><input type="text" value={this.state.carPrice} onChange={this.change} name="carPrice" /></td>
          <td><button type="button" onClick={this.updateCar}>Save</button><button type="button" onClick={this.props.onCancelClick}>Cancel</button></td>
        </tr>
    );
  }
}