import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import DevTools from './containers/DevTools'
import { createStore, compose, applyMiddleware } from 'redux';
import todoApp from './reducers'

import reducers from "./reducers";

import reduxPromise from "redux-promise";

// 把多个 store 增强器从右到左来组合起来，依次执行
// 这个地方完全可以不用compose，演示一下compose的使用
// const enhancer = compose(
//   DevTools.instrument()
// );

let storewithmiddleware = applyMiddleware(reduxPromise)(createStore);

let rootElement = document.getElementById('app')

render(
  <Provider store={storewithmiddleware(reducers)}>
    <div>
      <App />
    </div>
  </Provider>,
  rootElement
)
