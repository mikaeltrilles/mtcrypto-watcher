import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import colors from '../styles/_settings.scss';

//* Composant qui permet d'afficher une graphique de la crypto (chart) grace à l'id passé en props

const CoinChart = ({ coinId, coinName }) => {

  // Choix de la durée du graphique par défaut 30 pour 1 mois
  const [duration, setDuration] = useState(30);

  // stockages des données traitées des coins dans un tableau pour le chart
  const [coinData, setCoinData] = useState();


  // Entete du composant graphique
  const headerData = [
    [1, "1 jour"],
    [3, "3 jours"],
    [7, "7 jours"],
    [30, "1 mois"],
    [91, "3 mois"],
    [181, "6 mois"],
    [365, "1 an"],
    [3000, "Max"],
  ];

  // Fetch du graphique grace à l'id de la crypto et à la durée, récupération de la data en timestamp 
  useEffect(() => {

    let dataArray = [];

    axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`)
      .then(res => {
        // console.log(res.data.prices);

        // Pour chaque element de la data on ajoute un nouveau tableau avec les données de la data
        for (let i = 0; i < res.data.prices.length; i++) {
          let price = res.data.prices[i][1];                            // On récupère le prix de la crypto
          dataArray.push({                                              // On ajoute le prix de la crypto dans un nouveau tableau
            date: new Date(res.data.prices[i][0]).toLocaleDateString(), // On récupère la date de la data
            price: price < "50" ? price : parseInt(price),              // On récupère le prix de la crypto et on le formate si < à 50
          });
        }
        // console.log(dataArray);
        setCoinData(dataArray);
      })
    //? console.log(duration);
  }, [coinId, duration]); // Si la durée change on refait le fetch si l'on a le coinId

  return (
    <div className="coin-chart">
      <p> {coinName} </p>
      <div className="btn-container">
        {headerData.map((tab) => {
          return (
            <div
              key={tab[0]}
              htmlFor={"btn" + tab[0]}
              onClick={() => setDuration(tab[0])}
              className={tab[0] === duration ? "active-btn" : ""}
            >
              {tab[1]}
            </div>
          );
        })}
      </div>
      {/* Création du graphique */}
      <AreaChart
        width={700}
        height={350}
        data={coinData}
        margin={{ top: 10, right: 0, left: 100, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="7%" stopColor={colors.color1} stopOpacity={0.8} />
            <stop offset="93%" stopColor={colors.white1} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke={colors.color1}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default CoinChart;