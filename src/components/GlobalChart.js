import React, { useState, useEffect } from 'react';
import { Tooltip, Treemap } from 'recharts';
import colors from '../styles/_settings.scss';

//~ 🇫🇷 Gestion de la Map de crypto
//* 🇺🇸 Crypto map management

const GlobalChart = ({ coinsData }) => {

  //? console.log(coinsData);

  const [dataArray, setDataArray] = useState([]); // Préparation de ce que l'on va afficher dans la treemap

  //~ 🇫🇷 Choix des couleurs de la treemap en fonction du pourcentage
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

  // ⁡⁢⁣⁢=============================================================================================================================================================================================================================================================================================================================================================================================================
  //   SSS   TTTTT    A    BBB    L      EEEEE   CCC    OOO   III  N   N   SSS        L      III   SSS   TTTTT
  //  S        T     A A   B  B   L      E      C   C  O   O   I   NN  N  S           L       I   S        T
  //   SSS     T    A   A  BBBB   L      EEE    C      O   O   I   N N N   SSS        L       I    SSS     T
  //      S    T    AAAAA  B   B  L      E      C      O   O   I   N  NN      S       L       I       S    T
  //      S    T    A   A  B   B  L      E      C   C  O   O   I   N   N      S       L       I       S    T
  //  SSSS     T    A   A  BBBB   LLLLL  EEEEE   CCC    OOO   III  N   N  SSSS        LLLLL  III  SSSS     T
  // =============================================================================================================================================================================================================================================================================================================================================================================================================⁡
  // * * * STABLECOINS LIST

  //~ 🇫🇷 Exclusion des stables coins du choix de couleur car toujours 1$, possibilité d'en ajouter dans le futur
  //* 🇺🇸 Exclusion of stable coins from the color choice because they always have 1$, possibility to add them in the future

  const excludeStableCoin = (coin) => {
    if (
      coin === "1gold" ||  // 1irstGold
      coin === "ageur" ||  // Angle Protocol
      coin === "alusd" ||  // Alchemix USD
      coin === "arth" ||  // ARTH [polygon]
      coin === "ausd" ||  // Alpaca USD
      coin === "bac" ||  // Basis Cash
      coin === "bgbp" ||  // Binance GBP Stable Coin
      coin === "bean" ||  // Bean
      coin === "bidr" ||  // BIDR
      coin === "bitcny" ||  // bitCNY
      coin === "biteur" ||  // bitEUR
      coin === "bitusd" ||  // bitUSD
      coin === "bkrw" ||  // Binance KRW
      coin === "brcp" ||  // BRCP TOKEN
      coin === "bsd" ||  // Basis Dollar
      coin === "busd" ||  // Binance USD
      coin === "bvnd" ||  // Binance VND
      coin === "cadc" ||  // CAD Coin
      coin === "ceur" ||  // Celo Euro
      coin === "coffin" ||  // Coffin Finance
      coin === "const" ||  // Constant
      coin === "cousd" ||  // Coffin Dollar
      coin === "cusd" ||  // Celo Dollar
      coin === "dai" ||  // Dai Stable Coin
      coin === "dgd" ||  // DigixDAO
      coin === "dgx" ||  // Digix Gold Token
      coin === "dpt" ||  // Diamond Platform Token
      coin === "dsd" ||  // Dynamic Set Dollar
      coin === "dusd" ||  // Decentralized USD(Defichain) - DefiDollar
      coin === "ebase" ||  // EURBASE
      coin === "eosdt" ||  // EOSDT
      coin === "esd" ||  // Empty Set Dollar
      coin === "eurs" ||  // STASIS EURO
      coin === "eurt" ||  // Tether EURt
      coin === "fei" ||  // Fei USD
      coin === "float" ||  // Float Protocol: Float
      coin === "flusd" ||  // Fluity USD
      coin === "frax" ||  // Frax
      coin === "gusd" ||  // Gemini Dollar
      coin === "hgt" ||  // HelloGold
      coin === "husd" ||  // HUSD
      coin === "idrt" ||  // Rupiah Token
      coin === "iron" ||  // Iron
      coin === "itl" ||  // Italian Lira
      coin === "iusds" ||  // Inflation Adjusted USDS
      coin === "jpyc" ||  // JPY Coin v1
      coin === "kbc" ||  // Karatgold Coin
      coin === "krt" ||  // TerraKRW
      coin === "lusd" ||  // Liquity USD
      coin === "mdo" ||  // Midas Dollar
      coin === "mds" ||  // Midas Dollar Share
      coin === "mim" ||  // Magic Internet Money
      coin === "mtr" ||  // Meter Stable
      coin === "musd" ||  // mStable USD
      coin === "mxnt" ||  // Mexican Peso Tether
      coin === "onc" ||  // One Cash
      coin === "ousd" ||  // Origin Dollar
      coin === "par" ||  // Parallel
      coin === "qc" ||  // Qcash
      coin === "rsr" ||  // Reserve Rights
      coin === "rsv" ||  // Reserve
      coin === "sbd" ||  // Steem Dollars
      coin === "seur" ||  // sEUR
      coin === "susd" ||  // sUSD
      coin === "tor" ||  // TOR
      coin === "tribe" ||  // Tribe
      coin === "tryb" ||  // BiLira
      coin === "tusd" ||  // TrueUSD
      coin === "usdap" ||  // Bond Appetite USD
      coin === "usdb" ||  // USD Bancor
      coin === "usdc" ||  // USD Coin
      coin === "usdd" ||  // USDD
      coin === "usdex" ||  // USDEX
      coin === "usdfl" ||  // USDFreeLiquidity
      coin === "usdk" ||  // USDK
      coin === "usdl" ||  // USDL
      coin === "usdn" ||  // Neutrino USD
      coin === "usdp" ||  // USDP Stablecoin
      coin === "usdq" ||  // USDQ
      coin === "usds" ||  // Stably USD - Sperax USD - SpiceUSD
      coin === "usdt" ||  // Tether
      coin === "usdx" ||  // USDX [Kava]
      coin === "usn" ||  // USN
      coin === "usnbt" ||  // NuBits
      coin === "ust" ||  // 
      coin === "ustc" ||  // TerraClassicUSD
      coin === "usx" ||  // dForce USD
      coin === "vai" ||  // Vai
      coin === "xaur" ||  // Xaurum
      coin === "xchf" ||  // CryptoFranc
      coin === "xdai" ||  // xDAI
      coin === "xeur" ||  // xEURO
      coin === "xidr" ||  // XIDR
      coin === "xsgd" ||  // XSGD
      coin === "xusd" ||  // xDollar Stablecoin
      coin === "yusd" ||  // YUSD Stablecoin
      coin === "zusd"       // Zytara dollar
    ) {
      return false;
    } else {
      return true;
    }
  };

  //* quand les composons sont chargés, on lance la fonction de mise à jour des données
  useEffect(() => {

    let chartData = [];                                       // Création un tableau de données

    if (coinsData.length > 0) {          //* Controle que le tableau "coinsData" ne soit pas vide
      //* Parcours le tavleau "coinsData" sur les 50 premières cryptos
      for (let i = 0; i < 50; i++) {
        // avant de créer la treemap j'eclue les stablecoins
        if (excludeStableCoin(coinsData[i].symbol)) {
          // je "pushe" les données dans le tableau "chartData" a chaque tour de boucle
          chartData.push({
            // Symbole  de la crypto + pourcentage en 24h
            name: coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + "%",
            // Valeur du marketcap de la crypto, taille de la crypto dans la treemap
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

    setDataArray(chartData); //* On met à jour le tableau de donné "dataArray" avec le tableau "chartData"
  }, [coinsData]);  //* Appel de la fonction "setDataArray" à chaque fois que le tableau "coinsData" change (est incrementé) C'est un Callback.

  //* 🇫🇷 Création du composant de la vue du treemap avec les données de la crypto (nom, marketcap %, prix)
  //* 🇺🇸 Creation of the treemap component with the crypto data (name, marketcap %, price)

  const TreemapToolTip = ({ active, payload }) => { //* Création d'un composant de tooltip (bulle au survol) pour le treemap avec les données de la crypto (nom, marketcap %, prix)
    if (active && payload && payload.length > 0) {  // Controle que le composant soit actif et que le tableau "payload" ne soit pas vide
      return (  // Retourne le composant avec les données de la crypto
        <div className="custom-tooltip">
          <p className="label">
            {payload[0].payload.name} = {payload[0].payload.current_price.toLocaleString()} $
          </p>
        </div>
      );
    }
    return null; // Retourne null si je n'ai pas recu de données
  };

  //* 🇫🇷 Retour du composant de la vue du treemap avec les données de la crypto (nom, marketcap %, prix)
  //* 🇺🇸 Return of the treemap component with the data of the crypto (name, marketcap %, price)

  return (
    <div className='global-chart'>
      <Treemap
        width={730} // largeur de la treemap
        height={181}  //  hauteur de la treemap
        data={dataArray}  //  données de la treemap
        dataKey="size" //  taille de la crypto dans la treemap
        stroke='#000000' //  contour de la bordure dans la treemap
        fill='null' //  remplissage des case dans la treemap (null = pas de remplissage)
        // aspectRatio={1} //  ratio de la treemap désactivé car non satisfaisant pour le client
        ratio={4 / 3} //  ratio de la treemap
        style={{
          strokeWidth: 1,
          strokeOpacity: 1,
        }}
      >
        //* 🇫🇷 Affichage de la bulle tooltip avec un appel a l'intérieur du composant
        //* 🇺🇸 Display of the tooltip bubble with an internal call

        <Tooltip content={<TreemapToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalChart;