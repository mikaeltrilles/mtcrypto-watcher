import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setListDisplay } from '../actions/list.action';
import { setStableState } from '../actions/stable.action';

//* Composant du header de la page bouton de selection de la liste des crypto (avec ou sans stable coin + aucune liste + liste des favoris)

const TableFilter = () => {

  const [showStable, setShowStable] = useState(true); // Affichage des stable coin
  const [showFavList, setShowFavList] = useState(false); // Traitement de la liste des favoris

  const dispatch = useDispatch(); // Permet d'envoyer des actions au store Redux

  useEffect(() => {
    dispatch(setStableState(showStable)); // On envoie la valeur de showStable dans le store Redux
    dispatch(setListDisplay(showFavList));  // On envoie la valeur de showFavList dans le store Redux
  }, [showStable, showFavList]);

  return ( // Affichage du header
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          {/* Checkbox pour afficher ou non les stable coin */}
          <input type="checkbox" id="stableCoin" defaultChecked={true} onChange={() => setShowStable(!showStable)} />
          <label htmlFor="stableCoin" >{showStable ? 'Avec stable coin' : 'Sans stable coin'}</label>
        </div>
        {/* Masquage de la liste des favoris */}
        <div className={showFavList ? "no-list-btn" : "no-list-btn active"} onClick={() => setShowFavList(false)} >
          <p>Aucune liste</p>
        </div>
        {/*  */}
        {/* Affichage de la liste des favoris */}
        <div className={showFavList ? "fav-list active" : "fav-list"} onClick={() => setShowFavList(true)}>
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilter;