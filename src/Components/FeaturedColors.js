import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const FeaturedColors = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  async function getFeaturedColor() {
    try {
      const Featurecolor = await axios.get("https://comforting-semifreddo-525042.netlify.app/featured/colors",{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setCards(Featurecolor.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFeaturedColor();
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <h1 className='feature-title'>Featured  Colors For Daily Dress Suggestions Based On The colors!</h1>

      <div className="card-list">
        {currentCards.map((card) => (
          <Card
            key={card._id}
            imageSrc={card.featuredPhoto}
            name={card.name}
            description={card.description}
            //   hexCode={card.hexCode}
          />
        ))}
      </div>

      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : null}>
            <a href="#" onClick={() => setCurrentPage(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FeaturedColors;
