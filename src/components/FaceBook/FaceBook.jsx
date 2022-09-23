import profiles from '../../data/berlin.json'


const FaceBook = () => {

  return (
    <div>
      {
        profiles.map( profile => {
          const backGColor= profile.isStudent ? "blue" :  "pink"
          return (
          <div style={{backgroundColor: backGColor}}>
            <img src={profile.img}/>
            <div>
              <h2>FirstName: {profile.firstName}</h2>
              <h2>LastName: {profile.lastName}</h2>
              <h3>Country: {profile.country}</h3>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default FaceBook