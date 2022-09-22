import React, {Component} from "react";
import './Carousel.css'
class Carousel extends Component {
  
  state = {
    
    imagesLength: this.props.images.length-1,
    index: 1,
    currentImg: this.props.images[0]
  }
  
  right = () => {
    this.setState((prevState) => {
      console.log("Right");
      if( prevState.index < this.state.imagesLength ){
        console.log("entro en if the rigth",prevState.index);
        return {
          currentImg: this.props.images[prevState.index],
          index: prevState.index +1
        }
      } else if ( prevState.index === this.state.imagesLength ) {
        return {
          currentImg: this.props.images[prevState.index],
          index:0,
        }
      } else {
        return {
          currentImg: this.props.images[prevState.index],
          index: prevState.index +1,
          
        }
      }
    })
  }

  left =() => {
    this.setState((prevState) => {
      console.log("Left");
      if( prevState.index === 1 ){
        console.log("entro en if the Left",prevState.index);
        return {
          currentImg: this.props.images[prevState.index],
          index: prevState.index -1
        }
      } else if ( prevState.index === this.state.imagesLength ) {
        return {
          currentImg: this.props.images[prevState.index],
          index:0,
        }
      } else {
        return {
          currentImg: this.props.images[prevState.index],
          index: prevState.index -1,
          
        }
      }
    })
  }


  render(){
    const { currentImg } =this.state
    return (
      <div>
        <img src= { currentImg } className="Carousel" alt="images"/>
        <div>
          <button onClick={this.left} className="Button">Left</button>
          <button onClick={this.right} className="Button">Right</button>
        </div>
      </div>
    )
  }
}

export default Carousel