import './DriverCard.css'
import Rating from '../Rating/Rating'

const DriverCard = ({ name, rating, img, car}) => {

  return (
    <div className='card'>
      <img src={img} alt="driver"/>
      <div className='column'>
        <h2>{name}</h2>
          <Rating>{rating}</Rating>
        <p>{car.model} {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;