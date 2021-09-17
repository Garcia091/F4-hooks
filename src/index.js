import React from 'react';
import ReactDOM from 'react-dom';
//import { CallbackHook } from './components/06-memos/CallbackHook';
// import { MemoHook } from './components/06-memos/MemoHook';
//import { Memorize } from './components/06-memos/Memorize';
//import { Padre } from './components/07-tarea-memo/Padre';
import { MainApp } from './components/09-useContext/MainApp';


ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

