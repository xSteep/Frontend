import { TypeArtObject } from "../types";
import  ArtObjStyle  from "./ArtObj.module.css";
import * as functions from "../function"; 
import { useState } from "react";
import { dispatch } from "../state/state";
import { useRef } from "react";
import { MouseEvent } from "react"

type TypeArtObjectProps = {
    artObject: TypeArtObject;
}



export function ArtObj(props: TypeArtObjectProps) {

    const ref = useRef(null);
    const [pos, setPos] = useState({x: 0, y: 0});

    const handleClick = (e: MouseEvent) => {
        
        console.log(props.artObject);
        if ( !props.artObject.selection) 
        {
            dispatch(functions.isSelect, [props.artObject]);
        }
        else
        {
            dispatch(functions.unSelect, [props.artObject]);
        }
    }

    const handleMouseDown = (e: MouseEvent) => {
        
        if (props.artObject.selection === false) {
            return
        }

        const startPos = {x: e.pageX, y: e.pageY}
        setPos(startPos);
        console.log(startPos);
    }

    const handleMouseMove = (e: MouseEvent) => {

        if (e.buttons === 0) return;

        if (props.artObject.selection === false) {
          return
        }
    
        const delta = {x: e.pageX - pos.x , y: e.pageY - pos.y}
        const newPos = {x: props.artObject.location.x + delta.x, y: props.artObject.location.y + delta.y}
        
        console.log(delta);
        console.log(newPos);
    
        setPos({x: e.pageX, y: e.pageY})
        dispatch(functions.MoveArtObject, [{id: props.artObject.id, coord: newPos}])
    }

    const styleSelected = {
        left: props.artObject.location.x + "px",
        top: props.artObject.location.y + "px",
        width: props.artObject.size.width,
        height: props.artObject.size.height,
        fill: props.artObject.color,

        outline: props.artObject.selection ? "3px solid #32a1ce" : "",
    } 

    if (props.artObject.shape.typeContent == "Rectangle") {
        return (
            <div 
            onClick={handleClick} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={ () => {setPos(pos);}}
                ref={ref}
                style={ styleSelected } className={ props.artObject.selection ? ArtObjStyle.artObject : ArtObjStyle.artObject__select }>
                <svg style={styleSelected}>
                    <rect
                        width={props.artObject.size.width}
                        height={props.artObject.size.height}
                    />
                </svg>
            </div>
        );
    }

    if (props.artObject.shape.typeContent == "Triangle") {
        const coordinatesPeaks =
            "0,0 " + props.artObject.size.width  +
            ",0 " + props.artObject.size.width +
            "," + props.artObject.size.height;
        return (
            <div style={styleSelected} className={ArtObjStyle.artObject}>
                <svg>
                    <polygon points={coordinatesPeaks} />
                </svg>
            </div>
        );
      }
    
    if (props.artObject.shape.typeContent == "Ellipse") {
        return (
            <div style={styleSelected} className={ArtObjStyle.artObject}>
                <svg>
                    <ellipse
                        cx={props.artObject.size.width / 2}
                        cy={props.artObject.size.height / 2}
                        rx={props.artObject.size.height / 2}
                        ry={props.artObject.size.height / 2}
                    />
                </svg>
            </div>
        );
    }

    return null;
}