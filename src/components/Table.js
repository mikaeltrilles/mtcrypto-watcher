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

  // console.log(coinsData);

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
        //* 🇫🇷 On prend les cryptos de 0 au nombre de cryptos demandé - 🇺🇸 We take the coins from 0 to the number of coins requested
        .slice(0, rangeNumber)

        //* 🇫🇷 On trie les cryptos - 🇺🇸 We sort the coins})
        .sort((a, b) => {
          switch (orderBy) {
            case "Prix":
              return b.current_price - a.current_price;
            case "Prixreverse":
              return a.current_price - b.current_price;

            case "Market Cap":
              return b.market_cap - a.market_cap;
            case "Market Capreverse":
              return a.market_cap - b.market_cap;

            case "Volume":
              return b.total_volume - a.total_volume;
            case "Volumereverse":
              return a.total_volume - b.total_volume;

            case "1h":
              return b.price_change_percentage_1h_in_currency - a.price_change_percentage_1h_in_currency;
            case "1hreverse":
              return a.price_change_percentage_1h_in_currency - b.price_change_percentage_1h_in_currency;

            case "1j":
              return b.price_change_percentage_24h - a.price_change_percentage_24h;
            case "1jreverse":
              return a.price_change_percentage_24h - b.price_change_percentage_24h;

            case "1s":
              return b.price_change_percentage_7d_in_currency - a.price_change_percentage_7d_in_currency;
            case "1sreverse":
              return a.price_change_percentage_7d_in_currency - b.price_change_percentage_7d_in_currency;

            case "1m":
              return b.price_change_percentage_30d_in_currency - a.price_change_percentage_30d_in_currency;
            case "1mreverse":
              return a.price_change_percentage_30d_in_currency - b.price_change_percentage_30d_in_currency;

            case "6m":
              return b.price_change_percentage_200d_in_currency - a.price_change_percentage_200d_in_currency;
            case "6mreverse":
              return a.price_change_percentage_200d_in_currency - b.price_change_percentage_200d_in_currency;

            case "1a":
              return b.price_change_percentage_1y_in_currency - a.price_change_percentage_1y_in_currency;
            case "1areverse":
              return a.price_change_percentage_1y_in_currency - b.price_change_percentage_1y_in_currency;

            case "ATH":
              return b.ath_change_percentage - a.ath_change_percentage;
            case "ATHreverse":
              return a.ath_change_percentage - b.ath_change_percentage;

            default:
              return null;
          }
        })
        .map((coin, index) => (
          <TableLine coin={coin} index={index} />
        ))}
    </div>
  );
};

export default Table;