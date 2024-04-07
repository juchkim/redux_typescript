import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import rootRenderer from './reducers';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const loggerMiddleware = (store: any) => (next: any) => (action:any) => {
  console.log(`store : ${store}`);
  console.log(`action : ${action}`);
  next(action);
}

const middleware = applyMiddleware(loggerMiddleware)
const preloadedState = {
  counter: 0,
};
const store = createStore(rootRenderer, preloadedState, middleware);


const render = () => root.render( //render함수로 변경
  <React.StrictMode>
    <Provider store={store}>
      <App
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </Provider>
  </React.StrictMode>
);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
store.subscribe(render); //subscribe를 통해서 리덕스 스토어가 변화할 때 리랜더링 시켜주기