import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateContact} from '../../Redux/actions'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'//etc here we import some compose and withRouter to connect

class Edit extends Component {
  state ={
    lastName: '',
    name: ''
  }//it's a state, we push changes and use in props

  handleInputName = event => {
    const name = event.target.value

    this.setState({name})
  }

  handleInputLastName = event => {
    const lastName = event.target.value

    this.setState({lastName})
  }

  componentDidMount() {
    const currentIndex = this.props.currentIndex;
    const data = this.props.data;

    this.setState({
      name: currentIndex !== -1 ? data[currentIndex].name : '',
      lastName: currentIndex !== -1 ? data[currentIndex].lastName : ''
    })//we set index to know element codeName
  }

  handleClick = () => {
    this.props.updateContact(this.props.data, this.state, this.props.currentIndex)
    this.props.history.push('/')
  }//history work with push as a function in action onClick

  handleBack = () => {
    this.props.history.push('/')
  }//here too handleClick

  render() {
    return (
      <ul onClick={this.handleCloseNModal} className='modalOpen'>
        <button onClick={this.handleBack}>X</button>
        <li><input value={this.state.name} onChange={this.handleInputName}/></li>
        <li><input value={this.state.lastName} onChange={this.handleInputLastName}/></li>
        <li><button onClick={this.handleClick}>SAVE</button></li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    updateContact: (data, obj, index) => dispatch(updateContact(data, obj, index))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Edit);