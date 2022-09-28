import React, { Component } from "react";


class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state= {
      email: '',
      password: '',
      nationality:'',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
   
    this.setState( {
      email: '',
      password: '',
      nationality:'',
    } )
  }

  handleOnChange = (event) =>{
    const { name, value } = event.target
    console.log(name, value);
    this.setState( {[name]: value} )
  }
  
  render() {
    const {email, password, nationality , contacts} = this.state
    return(
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input 
            type="text"
            name="email" id="email"
            value={email}
            placeholder="Email"
            onChange={this.handleOnChange}
          />
          <label>password: </label>
          <input 
            type="text"
            name="password" id="password"
            value={password}
            placeholder="password"
            onChange={this.handleOnChange}
          />
          <label>Nationality: </label>
          <input 
            type="text"
            name="nationality" id="nationality"
            value={nationality}
            placeholder="nationality"
            onChange={this.handleOnChange}
          />
          <button type="submit">Submit</button>
        </form>
    )
  }
}


export default SignupPage