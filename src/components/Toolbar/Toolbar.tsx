import { dispatch } from '../../state/state';
import { useState } from 'react'; 
import ToolbarStyle from "./Toolbar.module.css";
import * as functions from "../../function"; 
import * as types from "../../types"
import { Canvas } from '../../types';
// import Button from '../Button/Button';

type ToolBarProps = {
    canvas: Canvas;
}

export default function ToolBar() {
    const [state, setState ] = useState('');

    

    return (
        <div className={ToolbarStyle.ToolBar}>
            {/* <button onClick={handlerClick}>test</button> */}
            <button className={ToolbarStyle.button__Add_Rectangle} onClick={ () => {
                dispatch(functions.addSquareOnCanvas, []);
                setState('');
            }}>
                add Rectangle
            </button>
            {/* <Button text="Прямоугольник" action={ () => dispatch(functions.addSquareOnCanvas, [])} /> */}
            <button className={ToolbarStyle.button__Add_Triangle} onClick={ () => {
                dispatch(functions.addTriangleOnCanvas, []);
                setState('');
            }}>
                add Triangle
            </button>

            <button className={ToolbarStyle.button__Add_Ellipse} onClick={ () => {
                dispatch(functions.addEllipseOnCanvas, []);
                setState('');
            }}>
                add Ellipse
            </button>
        </div>
    );
}