import React, { useState, useEffect } from 'react';
import { Tooltip, Treemap } from 'recharts';
import colors from '../styles/_settings.scss';

//* Gestion de la Map de crypto
const GlobalChart = ({ coinsData }) => {

  // console.log(coinsData);

  //* Préparation de ce que l'on va afficher dans la treemap
  const [dataArray, setDataArray] = useState([]);

  //* Choix de la couleur de la treemap en fonction du pourcentage
  const colorPicker = (number) => {
    if (number >= 20) {
      return colors.color1;
    } else if (number >= 5) {
      return colors.green2;
    } else if (number >= 0) {
      return colors.green1;
    } else if (number >= -5) {
      return colors.red1;
    } else if (number >= -20) {
      return colors.red2;
    } else {
      return colors.black2;
    }
  };

  //* Eclure les stable coins du choix de couleur car toujours 1$
  const excludeStableCoin = (coin) => {
    if (
      coin === "usdt" ||
      coin === "usdc" ||
      coin === "busd" ||
      coin === "dai" ||
      coin === "ust" ||
      coin === "tusd" ||
      coin === "usdp" ||
      coin === "usdn" ||
      coin === "usdd" ||
      coin === "ustc" ||
      coin === "fei" ||
      coin === "gusd" ||
      coin === "rsr" ||
      coin === "susd" ||
      coin === "frax" ||
      coin === "husd" ||
      coin === "lusd" ||
      coin === "eurs" ||
      coin === "usdx" ||
      coin === "xsgd" ||
      coin === "ousd" ||
      coin === "cusd" ||
      coin === "musd" ||
      coin === "musd" ||
      coin === "mim"
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    //* je crée un tableau de données
    let chartData = [];

    //* Je controle que le tableau "coinsData" ne soit pas vide
    if (coinsData.length > 0) {

      //* je parcours le tavleau "coinsData" sur les 50 premières cryptos
      for (let i = 0; i < 50; i++) {

        //* avant de créer la treemap j'eclue les stablecoins
        if (excludeStableCoin(coinsData[i].symbol)) {

          //* je "pushe" les données dans le tableau "chartData"
          chartData.push({

            //* Nom de la crypto + pourcentage en 24h
            name: coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + "%",

            //* Valeur du marketcap de la crypto
            size: coinsData[i].market_cap,

            //* Prix de la crypto
            current_price: coinsData[i].current_price,

            //* Couleur de la crypto en fonction du pourcentage
            fill: colorPicker(coinsData[i].price_change_percentage_24h),
          });
        }
      }
    }
    // console.log(chartData);
    setDataArray(chartData);
  }, [coinsData]);

  //* Création du composant de la vue du treemap avec les données de la crypto (nom, marketcap, prix)
  const TreemapToolTip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="custom-tooltip">
          <p className="label">
            {payload[0].payload.name} = {payload[0].payload.current_price.toLocaleString()} $
          </p>
        </div>
      );
    }
    return null;
  };



  return (
    <div className='global-chart'>
      <Treemap
        width={730}
        height={181}
        data={dataArray}
        dataKey="size"
        stroke='rgb(51, 51, 51)'
        fill='null'
        aspectRatio={1}
      >
        //* affichage de la bulle tooltip avec un appel a l'intérieur du composant
        <Tooltip content={<TreemapToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalChart;