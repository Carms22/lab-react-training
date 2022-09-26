import React from "react";
import './CreditCard.css';
import visa from "../../assets/images/visa.png"
import master from "../../assets/images/master-card.svg"


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  let parsNumber = (number) => {
    let lastFour = number.slice(-4)
    let newNumber = lastFour.padStart(number.length-4,'*')
    return <h2>{newNumber}</h2>
  }
  return(
    <div className="cardCredit" style= {{backgroundColor: bgColor, color: color }}>
      <div className="cardCredit__img">
        {type === 'Master Card' && (<img src={master} alt="type" />)}
        {type === 'Visa' && (<img src={visa} alt="type" />)}
      </div>
      {parsNumber(number)}
      <div className="row">
        <p>Expires {expirationMonth < 10 ? `${expirationMonth}`: expirationMonth}/{expirationYear.toString().slice(-2)}</p>
        <p>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  
  )
}

export default CreditCard;