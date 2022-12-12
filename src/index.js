import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import fetchreducer from './Reducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// import { batchedSubscribe } from 'redux-batched-subscribe'

// const mylogger=(store)=>{
//   return(next)=>{
//     return(action)=>{
//       console.log("WE ARE IN MIDDLEWARE")
//       return next(action)
//     }
//   }
// }

// const mylogger=store=>next=>action=>{
//   console.log("WE ARE IN MIDDLEWARE")
//   if(store.getState() >=10)
//   {

//     return next({
//       type:"DECREMENT"
//     })
//   }
//   return next(action)
// }

const store=configureStore({
  reducer:fetchreducer,
  middleware:[thunk],
  // enhancers: [batchedSubscribe()],
 
  
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <App />
  
    </Provider>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
