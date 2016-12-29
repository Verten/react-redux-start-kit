/**
 * Created by ebinhon on 12/29/2016.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions/user'
import UserList from '../components/userList'

class Register extends React.Component {
  static propTypes = {
    users: React.PropTypes.array,
    actions: React.PropTypes.object.isRequired
  }

  static defaultProps = {}

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {

  }
  // will mount
  componentWillMount() {
    const {actions} = this.props
    actions.fetchUser()
  }

  componentWillReceiveProps(nextProps) {
    const isProcessing = nextProps.isProcessing
    const error = nextProps.error
    if (!isProcessing && error !== null) {
      console.error('user fetch error.')
    }
  }

  render() {
    const {users} = this.props
    return (
      <UserList users={users}/>
    )
  }
}

function mapStateToProps(state) {
  const {userReducer} = state
  const {users, error, isProcessing} = userReducer.toJS()
  return {
    users,
    isProcessing,
    error
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatch)(Register)
