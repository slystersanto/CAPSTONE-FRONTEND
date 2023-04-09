import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { useState } from 'react';

const Autumn = () => {

    const[autumn,setAutumn]=useState([]);

    async function getAutumn(){
        try {
            const getAutmn= await axios.get("https://capstone-backend-node.onrender.com/spring",{
              headers:{
                Authorization:`${window.localStorage.getItem("token")}`
              }
            })
           setAutumn(getAutmn.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
            getAutumn();
    },[]);


  return (
    <>
    <h1 className='autumn-title'>#TheList:Color-Changing Spring Dresses</h1>
    <p className='autumn-sub'>Hard to choose because they're all so you...</p>
    <div className="card-list">
      {autumn.map(card => (
        <Card
          key={card._id}
          imageSrc={card.dressimg}
          name={card.dressname}
          description={card.descri}
        //   hexCode={card.hexCode}
        />
      ))}
    </div>
    
    
    
    
    
    </>
  )
};

export default Autumn