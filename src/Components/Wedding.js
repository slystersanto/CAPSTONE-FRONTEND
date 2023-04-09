import React from 'react'
import axios from 'axios'
import {useState,useEffect} from "react"
import CardWedding from './CardWedding'
import "./wedding.css";



const Wedding = () => {

    const[wedding,setWedding]=useState([]);

    async function getWedding(){
       try {
        const wedding=await axios.get("https://capstone-backend-node.onrender.com/featured/outfits/wedding",{
          headers:{
            Authorization:`${window.localStorage.getItem("token")}`
          }
        })
        setWedding(wedding.data);
       } catch (error) {
        console.log(error)
       }
    }

    useEffect(()=>{
        getWedding();
    })




  return (
    <>
    <h1 className='wed-title'>#The Wedding Color Suggestions</h1>
    <div className='wedding-page'>
      {wedding.map((item) => (
        <CardWedding
          key={item._id.$oid}
          weddname={item.weddname}
          weddimage={item.weddimage}
          wedddescription={item.wedddescription}
        />
      ))}
    </div>
    
    
    
    
    
    </>
  )
}

export default Wedding