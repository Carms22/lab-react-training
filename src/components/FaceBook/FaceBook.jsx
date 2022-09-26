import profiles from '../../data/berlin.json'
import React from "react";
import './FaceBook.css'
const coutries = Array.from(
  new Set(profiles.map(profile => profile.country))
)

class FaceBook extends React.Component {
  state = {
    country: null,
  }
  onCountryClick = (event) =>{
    const value = event.target.value
    this.setState({ country: value || null})
  }

  render (){
    const { country: countryState } = this.state
    const profileToRender =countryState ? profiles.filter(profile => profile.country === countryState ) : profiles

    return (
      <div className='Facebook'>
        <button className={!countryState ? 'selected' : '' }>All</button>
        {
          coutries.map( (country,i) => (
           <button
            value={country} key={i} onClick={this.onCountryClick}
            className={ countryState === country ? 'selected' : ''}
           >
            {country}
           </button> 
          
          ))
        }
        {
          profileToRender.map( (profile,i) => (
            <div key={i} className={`Facebook__item ${profile.country === countryState ? 'selected' : ''}` }>
              <div>
                <img src={profile.img} alt="pic"/>
                <div>
                  <h2><strong>FirstName:</strong> {profile.firstName}</h2>
                  <h2><strong>LastName:</strong> {profile.lastName}</h2>
                  <h3><strong>Country:</strong> {profile.country}</h3>
                  <h3><strong>Tupy:</strong> {profile.isStudent ? 'Student' : 'Teaches'}</h3>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default FaceBook