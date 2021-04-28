
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import './static/css/main.css'
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);