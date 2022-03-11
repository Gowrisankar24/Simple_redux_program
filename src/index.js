import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createStore} from'redux';
import { Provider } from 'react-redux';
import App  from './App';

//Selector
 const MESSAGE_1 = 'MESSAGE_1';
 const MESSAGE_2 = 'MESSAGE_2';

//Actions
export const action1=  ()=> ({type: MESSAGE_1 });
export const action2=  ()=> ({type: MESSAGE_2 });

//Reducer
const messageReducer= (state, action) => {
  switch (action.type) {
    case MESSAGE_1:
      return state= 'Hello';
    case MESSAGE_2 :
      return state = 'Welcome';
    default:
      return state = 'Display no Message';
  
  }
}

//Store
 let store = createStore(messageReducer);
//store.subscribe ( () => {console.log(store.getState())});

 //Dispatch
// store.dispatch(action1());
 //store.dispatch(action2());


ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
