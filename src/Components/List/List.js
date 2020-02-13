import React, {Component} from 'react'

import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { deleteTask, setEditIndex } from '../../Redux/actions/index'

class List extends Component{
  handleClick = index => {
    this.props.history.push('/edit')
    this.props.setEditIndex(index)
  }
  render(){
    return (
    <ul>
      {this.props.data.map((item,index) => {
        return <li
            key={index}
            style={{textDecoration: item.statusChange ? 'line-through':'none'}}
            onClick={ () => this.handleClick(index) }
          >
            {item.name} {item.lastName}
            <button onClick={event => {
              event.stopPropagation()
              this.props.deleteTask(this.props.data, index)
            }}>
              Delete
            </button>
          </li>
      })}
    </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    deleteTask:(state, index) => {
      dispatch(deleteTask(state, index))
    },
    setEditIndex: index => {
      dispatch(setEditIndex(index))
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(List)