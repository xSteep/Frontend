import {Canvas} from "../types";

const KEY = 'cardmaker'
let canvas: Canvas = {
    size: {
        width: 800,
        height: 600,
    },
    backgroundColor: "FFF", 
    listObject: [] 
}

// let canvas: Canvas = getCanvasFromStorage()
let changeCanvasHandler: Function = () => {}

function getState(): Canvas {
    return canvas
}

function setState(newCanvas: Canvas) {
    canvas = newCanvas
    changeCanvasHandler()
    // setCanvasToStorage()
}

function dispatch(modifyFn: Function, payload?: Array<Object>) {
    if (!payload) payload = [];
    
    setState(modifyFn(canvas, payload))
}

function addChangeCanvasHandler(handler: Function) {
    changeCanvasHandler = handler
}

// function setCanvasToStorage() {
//     window.localStorage.setItem(KEY, JSON.stringify(canvas))
// }

// function getCanvasFromStorage(): Canvas {
//     const canvas = window.localStorage.getItem(KEY)
//     return canvas ? JSON.parse(canvas) : []
// }

export {
    getState,
    dispatch,
    addChangeCanvasHandler,
    setState
}