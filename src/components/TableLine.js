import React from 'react';
import PercentChange from './PercentChange';

//* Ce composant permet de générer les lignes du tableau des cryptos en recupérant les données de l'API

const TableLine = ({ coin, index }) => {

  //* Fonction pour formatter le prix d'une petite crypto entre 0 et 1$
  //* Formule trouvé sur https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  const priceFormatter = (num) => {
    if (Math.round(num).toString().length < 4) {
      return new Intl.NumberFormat('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7
      }).format(num);
    } else {
      return num;
    }
  }

  //* Fonction pour formatter le prix du marché en Million de $ en recuperant le prix de la crypto sans les 6 derniers chiffres puis nous retournons un nombre join.
  const mktCapFormatter = (num) => {
    let newNum = String(num).split("").slice(0, -6);
    // console.log(newNum);
    return Number(newNum.join(""));
  }


  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} alt={coin.symbol} height="20" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4> {coin.name} </h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            href={"https://www.coingecko.com/fr/pi%C3%A8ces/" + coin.name
              .toLowerCase()
              .replace(" ", "-") //* Remplace le premier espace par un tiret
              .replace(" ", "-") //* Remplace le deuxieme espace par un tiret
              .replace(" ", "-") //* Remplace le troisième espace par un tiret au cas ou d'une monnaie a quatre termes
            }
          >
            <img src="assets/info-square.svg" alt="info" />
          </a>
        </div>
      </div>
      {/* Affichage du prix avec le formatage de la fonction priceFormatter */}
      <p> {priceFormatter(coin.current_price).toLocaleString()} $</p>
      {/* Affichage du MarketCap avec le formatage de la fonction mktFormatter */}
      <p className="mktcap"> {(mktCapFormatter(coin.market_cap)).toLocaleString()} Mio$</p>
      <p className="volume"> {coin.total_volume.toLocaleString()} $</p>
      {/* liste des pourcentage 1h, 1j , 1s, 1m , 6m , 1a, ATH */}
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />   {/* 1h */}
      <PercentChange percent={coin.price_change_percentage_24h} />              {/* 1j */}
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />   {/* 1s */}
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />  {/* 1m */}
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} /> {/* 6m */}
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />   {/* 1a */}
      {/* ATH avec prévision de le dépasser */}
      {coin.ath_change_percentage > -2 ? (
        <p className="ath">ATH !</p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
};

export default TableLine;