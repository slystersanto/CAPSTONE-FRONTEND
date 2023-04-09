import React from 'react'

const Card = (props) => {
  return (
    <>
     <div className="card">
      <img src={props.imageSrc} alt={props.name} />
      <div className="card-info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.hexCode}</p>
      </div>
    </div>
    
    
    </>
  )
}

export default Card
