let stocks = [
  { name: "RELIANCE", price: 2500 },
  { name: "TCS", price: 3200 },
  { name: "INFY", price: 1500 },
  { name: "HDFCBANK", price: 1600 },
  { name: "ICICIBANK", price: 900 },
  { name: "SBIN", price: 600 },
  { name: "ADANIENT", price: 2800 },
  { name: "WIPRO", price: 500 },
  { name: "LT", price: 2900 },
  { name: "HCLTECH", price: 1300 },
  { name: "AXISBANK", price: 1000 },
  { name: "KOTAKBANK", price: 1800 },
  { name: "MARUTI", price: 9000 },
  { name: "TITAN", price: 3500 },
  { name: "ULTRACEMCO", price: 8000 },
  { name: "BAJFINANCE", price: 7000 },
  { name: "ASIANPAINT", price: 3200 },
  { name: "SUNPHARMA", price: 1200 },
  { name: "ITC", price: 450 },
  { name: "NESTLEIND", price: 22000 },
  { name: "ONGC", price: 250 },
  { name: "COALINDIA", price: 300 },
  { name: "POWERGRID", price: 250 },
  { name: "NTPC", price: 280 },
  { name: "JSWSTEEL", price: 800 },
  { name: "TATASTEEL", price: 140 },
  { name: "HINDALCO", price: 500 },
  { name: "BPCL", price: 450 },
  { name: "IOC", price: 120 },
  { name: "GRASIM", price: 2000 },
  { name: "DIVISLAB", price: 3800 },
  { name: "DRREDDY", price: 6000 },
  { name: "CIPLA", price: 1400 },
  { name: "EICHERMOT", price: 3800 },
  { name: "HEROMOTOCO", price: 3000 },
  { name: "BAJAJ-AUTO", price: 8500 },
  { name: "ADANIPORTS", price: 900 },
  { name: "GODREJCP", price: 1100 },
  { name: "DABUR", price: 550 },
  { name: "BRITANNIA", price: 5000 },
  { name: "PIDILITIND", price: 2800 },
  { name: "APOLLOHOSP", price: 6000 },
  { name: "M&M", price: 1500 },
  { name: "TECHM", price: 1300 },
  { name: "ZOMATO", price: 150 },
  { name: "PAYTM", price: 800 },
  { name: "IRCTC", price: 700 },
  { name: "DMART", price: 4000 },
  { name: "NYKAA", price: 200 }
];

export const updatePrices = () => {
  stocks = stocks.map(s => {
    let change = Math.random()*20 - 10;
    return {
      ...s,
      price: +(Math.max(50, s.price + change)).toFixed(2)
    };
  });
};

export const getStocks = ()=>stocks;

export const getPrice = (name)=>{
  const s = stocks.find(x=>x.name===name);
  return s ? s.price : 100;
};