import React from 'react';

const ColorPsychology = ({ colorname, foto, descrip }) => {
  return (
    <div className="color-card">
        <div className="content"></div>
      <h1>{colorname}</h1>
      <img src={foto} alt={colorname} />
      <p className='desc'>{descrip}</p>
    </div>
  );
};

export default ColorPsychology;
