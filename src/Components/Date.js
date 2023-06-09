import React from 'react'
import axios from 'axios'
import{useState,useEffect} from "react";
import CardWedding from './CardWedding';





const Date = () => {
    const[date,setDate]=useState([]);
    async function getDate(){
        try {
            const Dates=await axios.get("https://capstone-backend-node.onrender.com/featured/outfits/date",{
                headers:{
                  Authorization:`${window.localStorage.getItem("token")}`
                }
              })
            setDate(Dates.data)
        } catch (error) {
            console.log(error)
        }
    }


useEffect(()=>{
    getDate();
})


  return (
  <>
  <h1 className='dat-title'>#The Dating Color Suggestions</h1>
  <div className='wedding-page'>
      {date.map((item) => (
        <CardWedding
          key={item._id.$oid}
          weddname={item.datname}
          weddimage={item.datimg}
          wedddescription={item.datdes}
        />
      ))}
    </div>
  
  
  </>
  )
}

export default Date