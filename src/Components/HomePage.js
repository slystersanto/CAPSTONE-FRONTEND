import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div className="hero">
        <h1>Discover Your Daily Dress Color</h1>
        <p>Get inspired by daily dress color suggestions and find the perfect outfit for your day.</p>
        <Link to="/featured-color"><button>Get Started</button></Link>
      </div>

      {/* <div className="featured-color">
        <h2>Today's Featured Color</h2>
        <h3>Blue</h3>
        <p>Blue is a calming color that represents trust, wisdom, and loyalty. Try incorporating it into your outfit today!</p>
        <Link to="/featured-color"><button>Know More</button></Link>
      </div>

      <div className="color-palettes">
        <h2>Popular Color Palettes</h2>
        <div className="color-palette">
          <div className="color-box" style={{backgroundColor: '#e6b31e'}}></div>
          <div className="color-box" style={{backgroundColor: '#f67e7d'}}></div>
          <div className="color-box" style={{backgroundColor: '#4c4e4d'}}></div>
          <div className="color-box" style={{backgroundColor: '#0085ca'}}></div>
          <div className="color-box" style={{backgroundColor: '#b8d8d8'}}></div>
        </div>
        <Link to="/featured-color-palettes"><button className='palt-btn'>Get Started</button></Link>

      </div>

      <div className="color-psychology">
        <h2>The Psychology of Color</h2>
        <p>Did you know that the colors you wear can have a psychological effect on yourself and those around you? Discover the meanings behind different colors and how you can use them to your advantage.</p>
      </div>

      <div className="seasonal-colors">
        <h2>Seasonal Colors</h2>
        <p>Find the perfect colors for each season, from bright and bold hues in the summer to warm and cozy tones in the winter.</p>
      </div>

      <div className="user-generated-content">
        <h2>OutFits!</h2>
        <p>See how other users are incorporating color into their outfits and get inspired.</p>
        
      </div> */}

      
    </div>
  );
}

export default HomePage;
