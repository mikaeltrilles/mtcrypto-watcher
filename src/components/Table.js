import React, { useState, useEffect } from 'react';
import TableLine from './TableLine';
import ToTop from './ToTop';


//* Composant Tableau qui affiche les données de la liste des cryptos
//* les deux inputs range et text ont la même valeur rangeNumber 


const Table = ({ coinsData }) => {
  //* Nombre de cryptos affichés sur la page
  const [rangeNumber, setRangeNumber] = useState(100);

  //* Entête du tableau 
  const tableHeader = [
    "Prix",
    "Market Cap",
    "Volume",
    "1h",
    "1j",
    "1s",
    "1m",
    "6m",
    "1a",
    "ATH"
  ];

  //* Variable qui permet de filtrer les données du tableau
  const [orderBy, setOrderBy] = useState("");

  console.log(coinsData);

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            {/* Input de type texte pour saisir le nombre de crypto à lister entre 1 et 250 */}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          {/* Input de type range pour saisir le nombre de crypto à lister entre 1 et 250 */}
          <input
            type="range"
            min="1"
            max="250"
            value={rangeNumber}
            onChange={(e) => setRangeNumber(e.target.value)}
          />
          <ToTop />
        </div>
        {/* Input de type radio pour l'entête des colonnes - Tri sur chaque input - le sélectionné est surbrillant */}
        {tableHeader.map((el) => (
          <li key={el}>
            <input
              type="radio"
              name="header-el"
              id={el}
              defaultChecked={el === orderBy || el === orderBy + "reverse" ? true : false}
              onClick={() => {
                //* Si l'entête est déjà sélectionné, on inverse le tri
                if (el === orderBy) {
                  setOrderBy(el + "reverse");
                } else {
                  setOrderBy(el);
                }
              }}
            />
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </ul>
      {/* Si il y a des données , j'affiche la liste des crypos dansn le tableau avec un range par defaut des 100 premieres */}
      {coinsData && coinsData
        .slice(0, rangeNumber)
        .map((coin, index) => (
          <TableLine coin={coin} index={index} />
        ))}
    </div>
  );
};

export default Table;