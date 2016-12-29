import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './app/containers/App'
import Register from './app/containers/Register'
import configureStore from './app/store/configureStore'
import {Router, Route, browserHistory} from 'react-router'

import 'todomvc-app-css/index.css'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/register" component={Register}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
