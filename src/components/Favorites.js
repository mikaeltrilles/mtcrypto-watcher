import React, { useState, useEffect } from 'react';

//* 🇫🇷 Composant pour mettre en favoris une crypto - 🇺🇸 Favorites component to add a crypto to favorites

const Favorites = ({coinId}) => {
  console.log(coinId);

  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (window.localStorage.coinlist) {
      let favList = window.localStorage.coinlist.split(',');
      if (favList.includes(coinId)) {
        setFav(true);
      }
    }
  });

  return (
    <img src={fav ? "./assets/star-full.svg" : "./assets/star-empty.svg"} alt="star" />
  );
};

export default Favorites;