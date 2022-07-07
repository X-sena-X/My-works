import React,{useState} from "react";

export default function TextForm(props) {
    const [newText,setNewtext]=useState('')      //state variable    setState is the method to change the variable value
    const handleUpClick = () =>{                 //   function to do on-click  {change to uppercase and set}
        let newText2= text.toUpperCase();
        setNewtext(newText2);
        console.log(text);
         

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]= useState('');
  return (
    <div className="mb-3">
        <h1>{props.heading}</h1>
        <label className="form-label">
            Enter the Text here
        </label>
        <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Start to Write"
            value={text}
            onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>capitalize</button>
        <div>
            <label className="form-label my-3">
                Text is Here
            </label>
            <textarea
                className="form-control"
                rows="5"
                value={newText}
            ></textarea>
        </div>

    </div>
    
  );
}
 
