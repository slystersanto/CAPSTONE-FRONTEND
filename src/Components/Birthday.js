import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";
import CardWedding from './CardWedding';



const Birthday = () => {

    const[birthday,setBirthday]=useState([]);

    async function getBirthday(){
        try {
            const Birth = await axios.get("https://capstone-backend-node.onrender.com/featured/outfits/birthday",{
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
    <h1 className='bir-title'>#The BirthDay Color Suggestions</h1>
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