import React, { useState, useEffect } from 'react';
import TableLine from './TableLine';
import ToTop from './ToTop';
import { useSelector } from 'react-redux';
import stableReducer from '../reducers/stable.reducer';


//* Composant Tableau qui affiche les données de la liste des cryptos
//* les deux inputs range et text ont la même valeur rangeNumber 


const Table = ({ coinsData }) => {
  //* Nombre de cryptos affichés sur la page
  const [rangeNumber, setRangeNumber] = useState(100);

  const showStable = useSelector((state) => state.stableReducer);

  const showList = useSelector((state) => state.listReducer);

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

        .filter((coin) => { //* 🇫🇷 On filtre les cryptos favorites 🇺🇸 We filter the favorite coins
          if(showList){
            let list = window.localStorage.coinList.split(",");
            if (list.includes(coin.id)) {
              return coin;
            }
          } else{
            return coin;
          }
        })

        .filter((coin) =>{
          //* 🇫🇷 Si l'utilisateur a coché la checkbox "Avec stable coin" on affiche les cryptos avec stable coin - 🇺🇸 If the user has checked the "With stable coin" checkbox, we display the coins with stable coin
          if (showStable) {
            return coin;
          } else {
            if(excludeStableCoin(coin.symbol)){
              return coin;
            }
          }
        })

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
          <TableLine coin={coin} index={index} key={index} />
        ))}
    </div>
  );
};

export default Table;