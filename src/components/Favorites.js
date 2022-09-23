import React, { useState, useEffect } from 'react';

// ⁡⁢⁣⁢🇫🇷 Composant pour mettre en favoris une crypto avec le localstorage⁡
// ⁡⁣⁢⁣🇺🇸 Favorites component to add a crypto to favorites with localstorage ⁡

const Favorites = ({ coinId }) => {
  //? console.log(coinId);

  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (window.localStorage.coinList) {                       // Si le localStorage existe
      let favList = window.localStorage.coinList.split(',');  // On récupère la liste des favoris
      if (favList.includes(coinId)) {                         // Si la crypto est déjà dans la liste des favoris
        setFav(true);                                         // Variable fav à true pour afficher l'icone "étoile full"
      }
    }
  });

  // ⁡⁢⁣⁢🇫🇷 Fonction qui permet d'ajouter/retirer une crypto à la liste des favoris
  // ⁡⁣⁢⁣🇺🇸 Function to add/remove a crypto to the favorites list⁡

  const idChecker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {                       // Si le localStorage existe
      favList = window.localStorage.coinList.split(',');      // On récupère la liste des favoris séparés par des virgules
    }

    if (favList) {                                            // Si la liste existe
      if (favList.includes(id)) {                             // Si la crypto est déjà dans la liste des favoris
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setFav(false);                                        // Retire la crypto de la liste des favoris
      } else {
        window.localStorage.coinList = [...favList, coinId];  // Sinon, on ajoute la crypto à la liste des favoris en destructurant favlist et en ajoutant la nouvelle crypto
        setFav(true);                                         // Ajoute la crypto à la liste des favoris
      }
    } else {
      window.localStorage.coinList = coinId;                  // Sinon, on ajoute la crypto à la liste favoris coinlist
      setFav(true);
    }
    //? console.log(favList);
  };

  //* 🇫🇷 Au clic sur l'étoile on stocke la valeur de la crypto dans le localStorage
  //* 🇺🇸 On click on store the value of the crypto in the localStorage

  return (
    <img
      onClick={() => idChecker(coinId)}
      src={fav ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="star" />
  );
};

export default Favorites;