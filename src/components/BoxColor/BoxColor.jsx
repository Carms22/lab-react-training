import React from "react";
import './BoxColor.css'

const BoxColor =({ r, g, b }) => {
  function chooseColor (r, g, b){
    let color = "#"+(r).toString(16).padStart(2,'0')+(g).toString(16).padStart(2,'0')+(b).toString(16).padStart(2,'0')
    return <p style={{backgroundColor: color}}>{color}</p>
  }
  return(
    <div>
      {chooseColor(r, g, b )}
    </div>
  )
}

export default BoxColor;