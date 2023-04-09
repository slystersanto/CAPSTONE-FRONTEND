import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import paletteimg from "../Assests/matching.jpg";

function ColorPalette() {
  const [palettes, setPalettes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://capstone-backend-node.onrender.com/featured/colors/palettes',{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setPalettes(result.data);
    }
    fetchData();
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = palettes.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(palettes.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <h1 className='color-title'>How To Mix & Match Daily Color Palettes?</h1>
      <p className='desc-para'>Here is a simple example showing the importance of color harmony in our daily life:<br/>
      when you wear an emerald color dress it is going to look more visually striking toad <br/>
      choose a blood-red lipstick to go with it than if you were going to wear a dull mauv<br/>
      shade. If that is the effect you are going after, you will chose the red rather than the<br/> mauve, right?.</p>
      <img src={paletteimg} alt="" className='wheel-img'/>
      <div className="palette-container">
        {currentItems.map((palette) => (
          <div key={palette._id.$oid} className="palette-card">
            <img className="palette-image" src={palette.paletfoto} alt={palette.title} />
            <div className="palette-details">
              <h3 className="palette-title">{palette.title}</h3>
              <p className="palette-description">{palette.desc}</p>
              <Link to="/featured-color"><button className="palette-button">View Palette</button></Link>
            </div>
          </div>
        ))}
      </div>
      <ul className="pagination-palette">
        {pageNumbers.map(number => (
          <li key={number} id={number} onClick={handlePageClick} className={currentPage === number ? 'active' : null}>
            {number}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ColorPalette;
