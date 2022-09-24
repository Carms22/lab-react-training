import React, { Component } from 'react'
import './LikeButton.css'

class LikeButton extends Component {
  state = {
    count: 0 ,
    color: ['purple','blue','green','yellow','orange','red'],
    colorChoose: ''
  }

  randomColor = (color) => {
    console.log(color) 
    const index = Math.floor(Math.random()*color.length)
    return { 
      colorChoose : color[index]
    }
  }
  add = () => {
    this.randomColor (this.state.color)
    console.log( this.randomColor (this.state.color));
    this.setState({ count: this.state.count + 1 }, () => {
    }) 
   
  }

  render() {
    console.log('render')
    const { count, colorChoose } = this.state
    return (
      <div>
        <button className="Button" onClick={this.add} style ={{backgroundColor: colorChoose}}>{count} Likes</button>
      </div>
    )
  }
}

export default LikeButton;