import React from "react"
import { useLocation } from "react-router-dom";
import { Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import FeaturedColors from "./Components/FeaturedColors";
import ColorPalette from "./Components/ColorPalette";
import ColorPsychologyList from "./Components/ColorPsychologyList";
import Summer from "./Components/Summer";
import Autumn from "./Components/Autumn";
import Spring from "./Components/Spring";
import Winter from "./Components/Winter";
import Wedding from "./Components/Wedding";
import Birthday from "./Components/Birthday";
import Party from "./Components/Party";
import Date from "./Components/Date";
import Login from "./Components/Login";


function App() {
  const location=useLocation();

  const shouldRenderNavbar=location.pathname !== '/';
  return (
    <React.Fragment>
     {shouldRenderNavbar && <Navbar/>}
     <Routes>
     <Route path={"/"} element={<Login/>}/>
        <Route path={"/home"} element={<HomePage/>}/>
         <Route path={"/featured-color"} element={<FeaturedColors />} />
         <Route path={"/color-palettes"} element={<ColorPalette />} />
        <Route path={"/color-psychology"} element={<ColorPsychologyList />} />
        <Route path={"/seasonal-colors/summer"} element={<Summer />} /> 
        <Route path={"/seasonal-colors/spring"} element={<Autumn />} />
        <Route path={"/seasonal-colors/autumn"} element={<Spring />} />
        <Route path={"/seasonal-colors/winter"} element={<Winter />} />
        <Route path={"/outfits/wedding"} element={<Wedding />} />
        <Route path={"/outfits/birthday"} element={<Birthday />} />
        <Route path={"/outfits/party"} element={<Party />} />
        <Route path={"/outfits/date"} element={<Date />} />

      </Routes>


     </React.Fragment>
  );
}

export default App;
