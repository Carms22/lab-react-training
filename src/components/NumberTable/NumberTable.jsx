import './NumberTable.css'
const NumberTable = ( {limit}) => {
  const arr = Array.from({length: limit}, (_, index) => index + 1);
  
  return (
      <div>
        {
          arr.map((num, i) => {
            const backGColor= num %2===0 ? "red" :  "white" 
            return (
              <div className='all' key={num}>
                <p style={{backgroundColor: backGColor}} className="cu">{num}</p>
              </div>
            )
          })
        }
      </div>
  )
}

export default NumberTable;