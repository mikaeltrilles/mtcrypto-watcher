🇺🇸 English
-
# ₿eontrade Watchlist

![Time to Code](https://wakatime.com/badge/user/933ebfa6-42e4-4a54-b3fc-658e9f1ab22f/project/dbb5c8a3-45a8-4a2f-bd51-bef69daa5649.svg)
![VSCode](https://img.shields.io/badge/code-vscode-lightgreen.svg)

In order to facilitate the reading of the code and the exploration of the code, I suggest you to install the code comment colorization plugin [Colorful Comments](https://marketplace.visualstudio.com/items?itemName=ParthR2031.colorful-comments) for VSCode.

  Link to the [Coingecko](https://www.coingecko.com/en) website  
  Link to the [Coingecko API documentation](https://www.coingecko.com/en/api/documentation)  

  List of APIs used to get the data:
  * [Global Market Data](https://api.coingecko.com/api/v3/global)
  * [Detailed data by crypto](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y)
  
  Base address for the access to the detailed data of the crypto: "https://www.coingecko.com/en/coins/"

-------

For the treemap, we use recharts. Link to the [recharts documentation](https://recharts.org/en-US/examples/CustomContentTreemap) 

Install recharts treemap :

```bash
npm install recharts
```
The first result is :
![header](src/assets/readme/header.jpg)

-------

🇫🇷 Français
-
# ₿eontrade Watchlist

Afin de faciliter la lecture du code et de l'exploration du code, je vous propose d'installer le plugin de colorisation des commentaires de code [Colorful Comments](https://marketplace.visualstudio.com/items?itemName=ParthR2031.colorful-comments) pour VSCode.

Utilisation de l'api de Coingecko pour récupérer les données nécessaire à la watchlist.  

Lien du site [Coingecko](https://www.coingecko.com/fr)  

Lien de la doc : [Documentation API Coingecko](https://www.coingecko.com/fr/api/documentation)  

Liste des API utilisé pour la récupération des données :

* [Donnée Globale du Marché](https://api.coingecko.com/api/v3/global)

* [Donnée détaillé par crypto](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y)

Base de l'adresse pour l'acces au détail de la crypto : "https://www.coingecko.com/fr/pi%C3%A8ces/"  

-------

Utilisation de recharts treemap pour afficher les données de la watchlist de type [coin360](https://www.coin360.com/). 
Lien de la doc : [https://recharts.org/en-US/examples/CustomContentTreemap](https://recharts.org/en-US/examples/CustomContentTreemap)  

Installation de recharts treemap :

```bash
npm install recharts
```

Ce qui nous donne ce joli résultat :  
![header](src/assets/readme/header.jpg)
  
Coin price chart : `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`
