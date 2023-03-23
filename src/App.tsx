import React from 'react';
import AppStyle from "./App.module.css";

import * as functions from "./function"; 
import * as types from "./types"

// import Text from "./Text";
import Canvas from './components/Canvas';
import ToolBar from './components/Toolbar/Toolbar';

import { dispatch } from './state/state';
import { useState } from 'react'; 

type AppProps = {
  canvas: types.Canvas;
}


function App(props: AppProps) {

  return (
    <div className={AppStyle.App}>
        <ToolBar/>
      {/* <div className={AppStyle.WindowCanvas}> */}
        <Canvas canvas={props.canvas}/>
      {/* </div> */}
    </div>
  );
}

export default App;