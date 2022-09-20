import React from "react";
import './Rating.css';
import {AiOutlineFire} from "react-icons/ai" 
import {AiFillFire} from "react-icons/ai" 

const Rating = (children) => {
  let numberStarts = (children) =>{
    switch (children) {
      case children < 0.5:
        return <h4>Rating:<AiOutlineFire/><AiOutlineFire/><AiOutlineFire/><AiOutlineFire/><AiOutlineFire/></h4>
      case 0.5 < children < 1:
        return <h4>Rating:<AiFillFire/><AiOutlineFire/><AiOutlineFire/><AiOutlineFire/><AiOutlineFire/></h4>
      case 1 < children < 1.9:
        return <h4>Rating: <AiFillFire/><AiFillFire/><AiOutlineFire/><AiOutlineFire/><AiOutlineFire/></h4>
      case 2 < children < 2.9:
        return <h4>Rating:<AiFillFire/><AiFillFire/><AiFillFire/><AiOutlineFire/><AiOutlineFire/></h4>
      case 3 < children < 3.9:
        return <h4>Rating:<AiFillFire/><AiFillFire/><AiFillFire/><AiOutlineFire/></h4>
      case 4 < children:
        return <h4>Rating:<AiFillFire/><AiFillFire/><AiFillFire/><AiFillFire/><AiFillFire/></h4>
      default:
      }
  }
  return (
    <div>
      {numberStarts(children)}
    </div>
  )
}

export default Rating;