import ButtonStyle from "./Button.module.css"
import { MouseEvent } from "react"

type ButtonProps = {
    // image: String;
    text: string;
    action: Function;
}

// export default function Button(props: ButtonProps) {
//     return (
//         <div className={ButtonStyle.button} title={props.text} onClick={props.action} > 
//             {/* <img src={props.image}/> */}
//         </div>
//     )
// }