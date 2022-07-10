# Beontrade Watchlist

Utilisation de l'api de Coingecko pour récupérer les données de la watchlist.
Lien de la doc : [https://www.coingecko.com/fr/api/documentation](https://www.coingecko.com/fr/api/documentation)

Utilisation de recharts treemap pour afficher les données de la watchlist.
lien de la doc : [https://recharts.org/en-US/examples/CustomContentTreemap](https://recharts.org/en-US/examples/CustomContentTreemap)

Installation de recharts treemap :

```bash
npm install recharts
```

Market data : `https://api.coingecko.com/api/v3/global`

All market data : `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`

Coin price chart : `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`

Coingecko : `https://www.coingecko.com/fr/pi%C3%A8ces/`