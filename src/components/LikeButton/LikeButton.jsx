import React, { Component } from 'react'
import './LikeButton.css'

class LikeButton extends Component {
  state = {
    count: 0 ,
    color: ['purple','blue','green','yellow','orange','red']
  }

  add = (event) => {
    const numberToIncrement = Number(event.target.value) || 1 // target.value siempre es string, por eso necesito el number

    this.setState({ count: this.state.count + 1 }, () => {
      console.log('added 1')
    }) // no puedo poner ++ porque sino modifico this.state y eso no mola
  }

randomColor = (color) => {
  return color(Math.floor().Math.random()*color.length)
}
// style = {this.randomColor()}

  render() {
    console.log('render')

    const { count, color } = this.state
    return (
      <div>
        <button className="Button" onClick={this.add}  >{count} Likes</button>
      </div>
    )
  }
}

export default LikeButton;