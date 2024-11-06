import React from 'react'
import Nav from './Nav'

const Header = (props) => {
  return (
    <div>
        mai Header hu ar mujhe Home page se {props.num} mila hai
        <Nav num={props.num}/>
    </div>
  )
}

export default Header