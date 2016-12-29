/**
 * Created by ebinhon on 12/29/2016.
 */
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  users: null,
  didInvalidDate: false,
  isProcessing: false,
  error: null
})

function userReducer(state = initialState, action) {
  const operation = {
    USER_REQUEST: () => {
      return state.merge({
        isProcessing: true,
        didInvalidate: false
      })
    },
    FETCH_USER: () => {
      let users = state.get('users') ? state.get('users').toJS() : state.get('users')
      users = action.users
      return state.merge({
        users: Immutable.fromJS(users),
        isProcessing: true,
        didInvalidate: false,
        error: null
      })
    },
    USER_ERROR: () => {
      let error = state.get('error') ? state.get('error').toJS() : state.get('error')
      error = action.error
      return state.merge({
        error: Immutable.fromJS(error),
        isProcessing: false,
        didInvalidate: true
      })
    }
  }
  if (operation[action.type]) {
    return operation[action.type]()
  }
  return state
}

export default userReducer
