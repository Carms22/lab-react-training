import React from "react";
import './CreditCard.css';


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  let parsNumber = (number) => {
    let lastFour = number.slice(-4)
    let newNumber = lastFour.padStart(number.length-4,'*')
    return <h4>{newNumber}</h4>
  }
  return(
    <div className="card" style= {{backgroundColor: color }}>
      <p>{type}</p>
      {parsNumber(number)}
      <section className="row">
        <p>{expirationMonth}</p>
        <p>{expirationYear}</p>
        <p>{bank}</p>
      </section>
      <p>{owner}</p>
    </div>
  
  )
}

export default CreditCard;