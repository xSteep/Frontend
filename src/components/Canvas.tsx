import * as types from "../types";
import { Text } from "./Text";
import { ArtObj } from "./ArtObject";
import { Image } from "./Image";
import  CanvasStyle  from "./Canvas.module.css"

type CanvasProps = {
    canvas: types.Canvas;
}

export default function Canvas(props: CanvasProps) {

    const style = {
        top: 50 + "px",
        width: props.canvas.size.width,
        height: props.canvas.size.height,
        background: props.canvas.backgroundColor,
    }

    const allObj = props.canvas.listObject;

    return (
        <>
            <div >
                <div id="selectionObject" className={CanvasStyle.SelectionObject}></div>
                <div style={style} className={CanvasStyle.Canvas}>
                    {allObj.map( item => {
                        if (item.type == "TypeTextBox") 
                        {
                            return <Text textBoxObj={item}/>
                        } 
                        else if (item.type == "TypeArtObject") 
                        {
                            return <ArtObj artObject={item}/>
                        } 
                        else if (item.type == "TypeImage") 
                        {
                            return <Image imageObj={item}/>
                        }
                    })}
                </div>
            </div>
        </>
    );
}
