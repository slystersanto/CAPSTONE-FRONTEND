import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const Spring = () => {

    const[spring,setSpring]=useState([])

    async function getSpring(){

        try {
            const spring=await axios.get("https://capstone-backend-node.onrender.com/featured/seasonal-colors/autumn",{
              headers:{
                Authorization:`${window.localStorage.getItem("token")}`
              }
            })
           setSpring(spring.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getSpring();
    },[])

  return (
    <>
    <h1 className='spring-title'>The Color Suit Is Back. Here's How to Wear The Trend This Autumn.</h1>
    <p className='spring-sub'>The fashion girl's updated guide to wearing a pantsuit.</p>
    <div className="card-list">
      {spring.map(card => (
        <Card
          key={card._id}
          imageSrc={card.springdressimg}
          name={card.springdressname}
          description={card.springdes}
        //   hexCode={card.hexCode}
        />
      ))}
    </div>
    
    
    
    
    </>
  )
}

export default Spring