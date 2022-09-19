
const Random = (({min,max}) => {
  function randomNumber (min,max){
    return Math.floor(Math.random() * (max - min) + min)
  }
  return(
    <div>
      <h4>Random number between {min} and {max} = {randomNumber(min,max)}</h4>
    </div>
  )
})
 
export default Random;