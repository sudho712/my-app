/* import React from 'react' */
import React, {useState} from 'react'


export default function TextForm(props){
    const handleUpClick=()=>{
        /* console.log("Uppercase was clicked" + text); */
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick=()=>{
        /* console.log("Uppercase was clicked" + text); */
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearClick=()=>{
        /* console.log("Uppercase was clicked" + text); */
        let newText='';
        setText(newText)
    }

    const handleOnChange =(event)=>{
        /* console.log("on change"); */
        setText(event.target.value)
    }
    const [text, setText] =useState('');


    return (

        <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="myBox"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
      </div>

            <div className="container my-3">
                <h1>Your text Summary</h1>
                <p>Words : {text.split(" ").length}</p>
                <p>Characters : {text.length}</p>
                <p>Minutes Read :{0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

      </>
    )
  }



