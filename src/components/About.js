import React, { useState } from 'react'

export default function About() {
  let [myStyle,setMyStyle] = useState(
    {
        color:'red',
        backgroundColor: 'blue'
    }
  )
const [btntext, setBtnText]=useState("Enable dark mode")

  const toggleStyle=()=>
  {
    if(myStyle.color=='white')
    {
        setMyStyle(
            {
                color:'black',
                backgroundColor:'white',
                border: '2px solid green'
            }
        )
        setBtnText("Enable Light mode")
    }
    else{
        setMyStyle(
            {
                color:'white',
                backgroundColor:'black'
            }
        )
        setBtnText("Enable Light mode")
    }
  }
  
    
  
    return (
      <div className='container' style={myStyle}>
        <div className="container">
            <h3>About us</h3>
            <hr />
            Rhis is the About page 
        </div>

        <div className="container my-3">
        <button onClick={toggleStyle} type='button' class="btn btn-primary">{btntext}</button>
        </div>
      </div>
    )
  }

