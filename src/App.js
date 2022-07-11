import axios from "axios";
import React, { useEffect, useState } from 'react';
import HeaderInfos from './components/HeaderInfos';
import GlobalChart from './components/GlobalChart';
import Table from './components/Table';
import ToTop from './components/ToTop';



const App = () => {
  //* Permet de changer le contenu des cryptos de la page
  const [coinsData, setCoinsData] = useState([]);

  //* Format de la date



  //* Récupération des données de l'API avec axios
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y')
      .then((res) => setCoinsData(res.data))
  }, []);

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        {/* * Je passe les données (data) des monnaies (coins) en props */}
        <GlobalChart coinsData={coinsData} />
        <p>{Date()}</p>
      </header>
      <Table coinsData={coinsData} />
      <ToTop /> Made with ❤️ by Mikael Trilles.
    </div>
  );
};

export default App;