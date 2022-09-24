import React from "react";
import './CreditCard.css';
const visa = "../../assets/images/visa.png"
const master = "../../assets/images/master-card.svg"


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  let parsNumber = (number) => {
    let lastFour = number.slice(-4)
    let newNumber = lastFour.padStart(number.length-4,'*')
    return <h2>{newNumber}</h2>
  }
  return(
    <div className="cardCredit" style= {{backgroundColor: bgColor, color: color }}>
      <img src={type === "Visa" ? {visa} : {master} } alt="type"/>
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