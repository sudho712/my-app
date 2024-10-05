/* import React from 'react' */
import React, {useState} from 'react'


export default function TextForm(props){
    const handleUpClick=()=>{
        /* console.log("Uppercase was clicked" + text); */
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange =(event)=>{
        /* console.log("on change"); */
        setText(event.target.value)
    }
    const [text, setText] =useState('Enter text here');


    return (

        <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="myBox"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        
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



