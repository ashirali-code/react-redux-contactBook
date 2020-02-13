import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createTask} from '../../Redux/actions/index'

class AddTodo extends Component {
  state={
    data:{
    name: '',
    lastName: ''
  }
  }

  handleNameInput = (event) => {
    const name = event.target.value

    this.setState({
      data: {name}
    })
  }

  handleLastNameInput = (event) => {
    const lastName = event.target.value

    this.setState({
      data: {lastName}
    })
  }

  handleClick = () => {
    this.props.dispatch(
      createTask(this.props.data, this.state.data.name, this.state.data.lastName)
    )
    this.setState({
      name: '',
      lastName: ''
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleNameInput} type="text"/>
        <input value={this.state.lastName} onChange={this.handleLastNameInput} type="text"/>
        <button onClick={this.handleClick}>AddTodo</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    data: state.data
  }
}

export default connect(mapStateToProps)(AddTodo);