
import React ,{useState,useRef} from "react";

function InputName() {
    const [name, setName] = useState("");
    const [submitName, SetSubmitName] = useState("");

    const HandleSubmit = () => {
        SetSubmitName(name);
        setName("");
    }

    const submitClear = ()=>{
        SetSubmitName("")
    }
    const inputRef = useRef(null); // Step 1: Create the ref

  const focusInputBox = () => {
    inputRef.current.focus();   // Step 2: Use the ref to focus
  }
    return(
        <div>
            <h2> Enter your name </h2>
            <input type="text" ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"></input>
            <button onClick={HandleSubmit}>Submit</button>
            {submitName && (<h3>Hello, {submitName}! 👋</h3>)}
             <button onClick={()=>{submitClear(); focusInputBox();}}>Clear</button>
        </div>
    )

}
export default InputName;