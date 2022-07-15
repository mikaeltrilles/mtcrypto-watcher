import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setListDisplay} from '../actions/list.action';
import {setStableState} from '../actions/stable.action';

//* Composant du header de la page bouton de selection de la liste des crypto (avec ou sans stable coin + aucune liste + liste des favoris)

const TableFilter = () => {

  const [showStable, setShowStable] = useState(true); 
  const[showFavList, setShowFavList] = useState(false); // Traitement de la liste des favoris

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
  },[showStable, showFavList]);




  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoin" defaultChecked={true} onChange={() => setShowStable(!showStable)} />
          <label htmlFor="stableCoin" >{ showStable ? 'Avec stable coin' : 'Sans stable coin' }</label>
        </div>
        <div className={showFavList ? "no-list-btn" : "no-list-btn active"} onClick={() => setShowFavList(false)} >
          <p>Aucune liste</p>
        </div>
        <div className={showFavList ? "fav-list active" : "fav-list"} onClick={() => setShowFavList(true)}>
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilter;