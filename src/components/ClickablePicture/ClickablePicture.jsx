import React from "react";
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
  
  state = {
    img: this.props.img
  }

  changePicture = () => {
    if(this.state.img === this.props.img){
      this.setState({img: this.props.imgClicked})
    }else{
      this.setState({img: this.props.img})
    }
  }

  render() {
    const { img } = this.state
    return (
      <div>
        <img src={img} className="img" onClick={this.changePicture} alt="img"/>
      </div>
    )
  }


}

export default ClickablePicture;