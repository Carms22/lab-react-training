import React from "react";
import './Dice.css';

//image
import diceEmpty from '../../assets/images/dice-empty.png';
import dice_1 from '../../assets/images/dice1.png';
import dice_2 from '../../assets/images/dice2.png';
import dice_3 from '../../assets/images/dice3.png';
import dice_4 from '../../assets/images/dice4.png';
import dice_5 from '../../assets/images/dice5.png';
import dice_6 from '../../assets/images/dice6.png';

class Dice extends React.Component {
  
  state = {
    img: diceEmpty,
    imgPosibi: [
      dice_1,
      dice_2,
      dice_3,
      dice_4,
      dice_5,
      dice_6
    ]
  }
  random = () => {
    return Math.floor(Math.random() * 5)
  }
 
  changeDice = () => {
    console.log(this.index);
    this.setState({img: this.state.img},() => {
      setTimeout(()=>{
        this.setState({img: this.state.imgPosibi[this.random()]})
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