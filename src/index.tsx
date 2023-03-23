import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import canvas1 from "./TestOb";
import { addChangeCanvasHandler, getState } from './state/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
function render() {
  root.render(
    <React.StrictMode>
      <App canvas={getState()}/>
    </React.StrictMode>
  );
}

addChangeCanvasHandler(render)
render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
