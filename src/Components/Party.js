import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import CardWedding from './CardWedding'

const Party = () => {
    const[party,setParty]=useState([])
    async function getParty(){
        try {
            const Parties=await axios.get("https://capstone-backend-node.onrender.com/featured/outfits/party",{
                headers:{
                  Authorization:`${window.localStorage.getItem("token")}`
                }
              })
            setParty(Parties.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getParty();
    })



  return (
    <>
    <h1 className='par-title'>#The Party Color Suggestions</h1>
    <div className='wedding-page'>
      {party.map((item) => (
        <CardWedding
          key={item._id.$oid}
          weddname={item.parname}
          weddimage={item.parimg}
          wedddescription={item.pardes}
        />
      ))}
    </div>
    
    
    
    </>
  )
}

export default Party