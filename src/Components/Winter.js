import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Card from './Card';

const Winter = () => {
    const[winter,setWinter]=useState([]);

    async function getWinter(){
       try {
        const winter=await axios.get("https://comforting-semifreddo-525042.netlify.app/featured/seasonal-colors/winter",{
          headers:{
            Authorization:`${window.localStorage.getItem("token")}`
          }
        })
        setWinter(winter.data)
       } catch (error) {
          console.log(error)
       }
    }

    useEffect(()=>{

        getWinter();
    })

  return (
   <>
   <h1 className='winter-title'>#Winter Is Coming,Let's Explore The Colors With Trends </h1>
   <div className="card-list">
        {winter.map((card) => (
          <Card
            key={card._id}
            imageSrc={card.winterimg}
            name={card.wintername}
            description={card.winterdesc}
            //   hexCode={card.hexCode}
          />
        ))}
      </div>

   
   
   
   </>
  )
}

export default Winter