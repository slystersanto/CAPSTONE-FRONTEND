import React from 'react'

const CardWedding = ({weddname,weddimage,wedddescription}) => {
  return (
    <>
    
        
    
    <div class="card-wedding">
    <img src={weddimage} alt={weddname} className='card-img'/>
    <div class="card-content-wedd">
      <h3 class="card-title-tit">{weddname}</h3>
      <p class="card-description-des">{wedddescription}</p>
    </div>
  </div>
  
  </>
  )
}

export default CardWedding;