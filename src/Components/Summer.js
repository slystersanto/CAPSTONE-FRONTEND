import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';

const Summer = () => {
    const[summer,setSummer]=useState([]);

      async function getSummerCode(){
        try {
            const Summercolor= await axios.get("http://localhost:9000/featured/seasonal-colors/summer",{
              headers:{
                Authorization:`${window.localStorage.getItem("token")}`
              }
            })
            setSummer(Summercolor.data)
        } catch (error) {
            console.log(error);
        }
       }
    
       useEffect(()=>{
        getSummerCode();
       },[]);

      

  return (
    <>
    <h1 className='summer-title'>#TheLIST: Looks that Equal Perfect Summer Color Style</h1>
    <p className='summer-sub'>See the ladies who manage to keep their cool, even when it's hot in the city...</p>
    <div className="card-list">
      {summer.map(card => (
        <Card
          key={card._id}
          imageSrc={card.wardrobefoto}
          name={card.names}
          description={card.des}
        //   hexCode={card.hexCode}
        />
      ))}
    </div>
    
    </>
  )
  
  };
export default Summer