/**
 * Created by ebinhon on 12/29/2016.
 */
import API from '../../api'
import * as Utilities from '../../utilities'
import { USER_ERROR, USER_REQUEST, FETCH_USER } from '../../constants/ActionTypes'

// default error action
function _error() {
  return error => ({
    type: USER_ERROR,
    error
  })
}

// default request action
function userRequest() {
  return {
    type: USER_REQUEST
  }
}

function _fetchUser() {
  return users => ({
    type: FETCH_USER,
    users
  })
}

function shouldFetchUser(state) {
  const { users, isProcessing, didInvalidate } = state.userReducer.toJS()
  if (!users || users.length === 0) {
    return true
  }
  if (isProcessing) {
    return false
  }
  return didInvalidate
}

export function fetchUser() {
  const url = API[FETCH_USER]()
  const config = null
  return (dispatch, getState) => {
    if (shouldFetchUser(getState())) {
      return dispatch(Utilities.callAPI(url, config, userRequest(), _fetchUser(), _error()))
    }
  }
}

