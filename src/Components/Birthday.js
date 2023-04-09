import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";
import CardWedding from './CardWedding';



const Birthday = () => {

    const[birthday,setBirthday]=useState([]);

    async function getBirthday(){
        try {
            const Birth = await axios.get("https://comforting-semifreddo-525042.netlify.app/featured/outfits/birthday",{
                headers:{
                  Authorization:`${window.localStorage.getItem("token")}`
                }
              })
            setBirthday(Birth.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getBirthday();
    })


  return (
    <>
    
    <div className='wedding-page'>
      {birthday.map((item) => (
        <CardWedding
          key={item._id.$oid}
          weddname={item.birname}
          weddimage={item.birimg}
          wedddescription={item.birdes}
        />
      ))}
    </div>
    
    
    
    </>
  )
}

export default Birthday