import { TypeTextBox } from "../types";
import  TextStyle  from "./Text.module.css";

type TextBoxProps = {
    textBoxObj: TypeTextBox
}

export function Text(props: TextBoxProps) {
    const style = {
        left: props.textBoxObj.location.x + "px",
        top: props.textBoxObj.location.y + "px",
        fontSize: props.textBoxObj.fontSize + "pt",
        color: props.textBoxObj.color
    };
    return (
        <input style={style} className={TextStyle.textBox} type="text" value = {props.textBoxObj.content}/>
    )
}