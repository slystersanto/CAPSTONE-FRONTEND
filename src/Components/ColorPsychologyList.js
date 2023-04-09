import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorPsychology from './ColorPsychology';
import colorpsycho from "./colorpsycho.css"

const ColorPsychologyList = () => {
  const [colors, setColors] = useState([]);

  async function getPsychoColor() {
    try {
      const response = await axios.get("https://capstone-backend-node.onrender.com/featured/colorpsychology",{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setColors(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPsychoColor();
  }, []);

  return (
    <>
    <h1 className='psycho-title'>How to apply the psychology of color in clothing daily<br/> - a guide for WOMEN DRESS</h1>
    <p className='sub-para1'>How to apply the psychology of color in clothing?</p>
    <p className='sub-para1'>To influence the success of negotiations or to make a man fall in love with you on a first date will<br/>
     help the right color of clothing.<br/> We tell you about the psychology of color, the subtleties of perception and successful things for different situations.</p>
    <div className='color-page'>
      {colors.map((item) => (
        <ColorPsychology
          key={item._id.$oid}
          colorname={item.colorname}
          foto={item.foto}
          descrip={item.descrip}
        />
      ))}
    </div>
    </>
  );
};

export default ColorPsychologyList;
