import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PercentChange from './PercentChange';
import TableFilter from './TableFilter';

//* Gestion de l'entête de la page (titre, nombre de crypto, marché, map de crypto)

const HeaderInfos = () => {

  const [headerData, setHeaderData] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/global')
      .then((res) => {
        setHeaderData(res.data.data);
      })
  }, []);

  return (
    <div className="header-container">
      <ul className="title">
        <li>
          <h1><img src="assets/logo.png" alt="" /></h1>
        </li>
        {/* * Affichage avce separatuer des milliers */}
        <li>Crypto-monnaies :{" "}
          {headerData.active_cryptocurrencies && headerData.active_cryptocurrencies.toLocaleString()}</li>
        <li>Marché :{" "}{headerData.markets && headerData.markets.toLocaleString()}</li>
      </ul>
      <ul className="infos-mkt">
        <li className="global-mkt">
          {/* //* Pourcentage du 24h sur le marché global */}
          Global Market Cap :
          <PercentChange percent={headerData.market_cap_change_percentage_24h_usd} />
        </li>
        <li>BTC Dominance :{" "}{headerData.market_cap_percentage && headerData.market_cap_percentage.btc.toFixed(1) + "%"}</li>
        <li>ETH Dominance :{" "}{headerData.market_cap_percentage && headerData.market_cap_percentage.eth.toFixed(1) + "%"}</li>
      </ul>
      <TableFilter />
    </div>
  );
};

export default HeaderInfos;