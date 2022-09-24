import profiles from '../../data/berlin.json'
import React from "react";


class FaceBook extends React.Component {
  state = {
    color: "white"
  }
  myCountry = () =>{
    return{
      
    }
  }

  render (){
    return (
      <div>
        <button onClick={this.myCountry} className='Button'>USA</button>
        <button className='Button'>England</button>
        <button className='Button'>Malaysia</button>
        <button className='Button'>Germany</button>
        <button className='Button'>Sweden</button>
        {
          profiles.map( (profile,i) => {
            const backGColor= profile.isStudent ? "blue" :  "pink"
            return (
            <div style={{backgroundColor: backGColor}} key={i}>
              <img src={profile.img} alt="pic"/>
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
}

export default FaceBook