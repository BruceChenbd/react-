import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configStore from './store/store';
import { Provider }  from 'react-redux'
import Router from './routes'
import * as serviceWorker from './serviceWorker';

// 注册store
const store = configStore();
console.log(process.env.NODE_ENV)
ReactDOM.render(
    <Provider store={store}>
       <Router />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
