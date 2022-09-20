import React from "react";
import './Dice.css';

class Dice extends React.Component {
  
  state = {
    img: "../../assets/images/dice-empty.png",
    imgPosibi: [
      "../../assets/images/dice1.png",
      "../../assets/images/dice2.png",
      "../../assets/images/dice3.png",
      "../../assets/images/dice4.png",
      "../../assets/images/dice5.png",
      "../../assets/images/dice6.png"
    ]
  }
  random = () => {
    return Math.floor(Math.random() * 5)
  }

  index = this.random()
 
  changeDice = () => {
    
    console.log(this.index);
    this.setState({img:this.state.img},() => {
      setTimeout(()=>{
        this.setState({img:this.state.imgPosibi[this.random()]})
      },1000)
      })
  }

  render() {
    const { img } = this.state
    return (
      <div>
        <img src={img} className="img" onClick={this.changeDice} alt="img"/>
      </div>
    )
  }


}

export default Dice;