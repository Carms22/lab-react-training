import './IdCard.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture, children}) => {
  return (
    <div className='card-container'>
      <h2>{children}</h2>
      <div >
        <img src={picture} alt="student"/>
      </div>
      <div className='card-info'>
        <h3>FirstName: {firstName}</h3>
        <h3>LastName: {lastName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Height: {height}</h3>
        <h3>Birthday: { new Date (birth).toDateString()}</h3>
      </div>
    </div>
  )
}

export default IdCard