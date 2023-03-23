import { TypeImage } from "../types";
import styleImage from "./Image.module.css"

type ImageProps = {
    imageObj: TypeImage;
}

export function Image(props: ImageProps) {
    const style = {
        left: props.imageObj.location.x + "px",
        top: props.imageObj.location.y + "px",
        width: props.imageObj.size.width,
        height: props.imageObj.size.height
      };    
    return (
        <img style={style} className={styleImage.image}  src={props.imageObj.src} />
    );
}