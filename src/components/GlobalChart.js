import React, { useState, useEffect } from 'react';
import { Tooltip, Treemap } from 'recharts';
import colors from '../styles/_settings.scss';

//* 🇫🇷 Gestion de la Map de crypto
//* 🇺🇸 Crypto map management

const GlobalChart = ({ coinsData }) => {

  //? console.log(coinsData);

                                                            // Préparation de ce que l'on va afficher dans la treemap
  const [dataArray, setDataArray] = useState([]);

  //* 🇫🇷 Choix des couleurs de la treemap en fonction du pourcentage
  //* 🇺🇸 Color choice for the treemap according to the percentage

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

  //* 🇫🇷 Exclusion des stables coins du choix de couleur car toujours 1$, possibilité d'en ajouter dans le futur
  //* 🇺🇸 Exclusion of stable coins from the color choice because they always have 1$, possibility to add them in the future

  const excludeStableCoin = (coin) => {
    if (
      coin === "1gold"  ||  // 1irstGold
      coin === "ageur"  ||  // Angle Protocol
      coin === "alusd"  ||  // Alchemix USD
      coin === "arth"   ||  // ARTH [polygon]
      coin === "ausd"   ||  // Alpaca USD
      coin === "bac"    ||  // Basis Cash
      coin === "bgbp"   ||  // Binance GBP Stable Coin
      coin === "bean"   ||  // Bean
      coin === "bidr"   ||  // BIDR
      coin === "bitcny" ||  // bitCNY
      coin === "biteur" ||  // bitEUR
      coin === "bitusd" ||  // bitUSD
      coin === "bkrw"   ||  // Binance KRW
      coin === "brcp"   ||  // BRCP TOKEN
      coin === "bsd"    ||  // Basis Dollar
      coin === "busd"   ||  // Binance USD
      coin === "bvnd"   ||  // Binance VND
      coin === "cadc"   ||  // CAD Coin
      coin === "ceur"   ||  // Celo Euro
      coin === "coffin" ||  // Coffin Finance
      coin === "const"  ||  // Constant
      coin === "cousd"  ||  // Coffin Dollar
      coin === "cusd"   ||  // Celo Dollar
      coin === "dai"    ||  // Dai Stable Coin
      coin === "dgd"    ||  // DigixDAO
      coin === "dgx"    ||  // Digix Gold Token
      coin === "dpt"    ||  // Diamond Platform Token
      coin === "dsd"    ||  // Dynamic Set Dollar
      coin === "dusd"   ||  // Decentralized USD(Defichain) - DefiDollar
      coin === "ebase"  ||  // EURBASE
      coin === "eosdt"  ||  // EOSDT
      coin === "esd"    ||  // Empty Set Dollar
      coin === "eurs"   ||  // STASIS EURO
      coin === "eurt"   ||  // Tether EURt
      coin === "fei"    ||  // Fei USD
      coin === "float"  ||  // Float Protocol: Float
      coin === "flusd"  ||  // Fluity USD
      coin === "frax"   ||  // Frax
      coin === "gusd"   ||  // Gemini Dollar
      coin === "hgt"    ||  // HelloGold
      coin === "husd"   ||  // HUSD
      coin === "idrt"   ||  // Rupiah Token
      coin === "iron"   ||  // Iron
      coin === "itl"    ||  // Italian Lira
      coin === "iusds"  ||  // Inflation Adjusted USDS
      coin === "jpyc"   ||  // JPY Coin v1
      coin === "kbc"    ||  // Karatgold Coin
      coin === "krt"    ||  // TerraKRW
      coin === "lusd"   ||  // Liquity USD
      coin === "mdo"    ||  // Midas Dollar
      coin === "mds"    ||  // Midas Dollar Share
      coin === "mim"    ||  // Magic Internet Money
      coin === "mtr"    ||  // Meter Stable
      coin === "musd"   ||  // mStable USD
      coin === "mxnt"   ||  // Mexican Peso Tether
      coin === "onc"    ||  // One Cash
      coin === "ousd"   ||  // Origin Dollar
      coin === "par"    ||  // Parallel
      coin === "qc"     ||  // Qcash
      coin === "rsr"    ||  // Reserve Rights
      coin === "rsv"    ||  // Reserve
      coin === "sbd"    ||  // Steem Dollars
      coin === "seur"   ||  // sEUR
      coin === "susd"   ||  // sUSD
      coin === "tor"    ||  // TOR
      coin === "tribe"  ||  // Tribe
      coin === "tryb"   ||  // BiLira
      coin === "tusd"   ||  // TrueUSD
      coin === "usdap"  ||  // Bond Appetite USD
      coin === "usdb"   ||  // USD Bancor
      coin === "usdc"   ||  // USD Coin
      coin === "usdd"   ||  // USDD
      coin === "usdex"  ||  // USDEX
      coin === "usdfl"  ||  // USDFreeLiquidity
      coin === "usdk"   ||  // USDK
      coin === "usdl"   ||  // USDL
      coin === "usdn"   ||  // Neutrino USD
      coin === "usdp"   ||  // USDP Stablecoin
      coin === "usdq"   ||  // USDQ
      coin === "usds"   ||  // Stably USD - Sperax USD - SpiceUSD
      coin === "usdt"   ||  // Tether
      coin === "usdx"   ||  // USDX [Kava]
      coin === "usn"    ||  // USN
      coin === "usnbt"  ||  // NuBits
      coin === "ust"    ||  // 
      coin === "ustc"   ||  // TerraClassicUSD
      coin === "usx"    ||  // dForce USD
      coin === "vai"    ||  // Vai
      coin === "xaur"   ||  // Xaurum
      coin === "xchf"   ||  // CryptoFranc
      coin === "xdai"   ||  // xDAI
      coin === "xeur"   ||  // xEURO
      coin === "xidr"   ||  // XIDR
      coin === "xsgd"   ||  // XSGD
      coin === "xusd"   ||  // xDollar Stablecoin
      coin === "yusd"   ||  // YUSD Stablecoin
      coin === "zusd"       // Zytara dollar
    ) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    
    let chartData = [];                                       // Création un tableau de données

    if (coinsData.length > 0) {                               // Controle que le tableau "coinsData" ne soit pas vide
                                                              // Parcours le tavleau "coinsData" sur les 50 premières cryptos
      for (let i = 0; i < 50; i++) {
                                                              // avant de créer la treemap j'eclue les stablecoins
        if (excludeStableCoin(coinsData[i].symbol)) {
                                                              // je "pushe" les données dans le tableau "chartData"
          chartData.push({
                                                              // Nom de la crypto + pourcentage en 24h
            name: coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + "%",
                                                              // Valeur du marketcap de la crypto
            size: coinsData[i].market_cap,
                                                              // Prix de la crypto
            current_price: coinsData[i].current_price,

                                                              // Couleur de la crypto en fonction du pourcentage
            fill: colorPicker(coinsData[i].price_change_percentage_24h),
          });
        }
      }
    }
    //? console.log(chartData);

    setDataArray(chartData);
  }, [coinsData]);                                          // Appel de la fonction "setDataArray" à chaque fois que le tableau "coinsData" change

  //* 🇫🇷 Création du composant de la vue du treemap avec les données de la crypto (nom, marketcap %, prix)
  //* 🇺🇸 Creation of the treemap component with the crypto data (name, marketcap %, price)

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


  //* 🇫🇷 Retour du composant de la vue du treemap avec les données de la crypto (nom, marketcap %, prix)
  //* 🇺🇸 Return of the treemap component with the data of the crypto (name, marketcap %, price)

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
        //* 🇫🇷 Affichage de la bulle tooltip avec un appel a l'intérieur du composant
        //* 🇺🇸 Display of the tooltip bubble with an internal call
        
        <Tooltip content={<TreemapToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalChart;