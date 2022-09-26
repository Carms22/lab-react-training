import React, { Component } from 'react'
import './LikeButton.css'
const colors = ['purple','blue','green','yellow','orange','red'];

class LikeButton extends Component {
  state = {
    count: 0 ,
    colorChoose: ''
  }


  add = () => {
    this.setState(prevState =>{ 
      return {count:prevState.count + 1 
      }
    }) 
  }

  render() {
  
    const { count } = this.state
    return (
      <div>
        <button 
          className="Button" onClick={this.add} 
          style ={{backgroundColor: colors[ count % colors.length] }}
        >
          {count} {count === 1 ? "like" : "likes"}
        </button>
      </div>
    )
  }
}

export default LikeButton;