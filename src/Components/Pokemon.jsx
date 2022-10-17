import React from 'react'

export default function Pokemon(props) {
  return (
    <>
    <h1>HP: {props.hp}</h1>
    <img src={props.pic} alt='pokemon'/>
    <br/>
    <button onClick={()=>{props.handleAttack()}} >Attack</button>
    </>
  )
}
