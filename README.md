# 🚀 GatiStocks – Full Stack Stock Trading Simulator

GatiStocks is a full-stack stock trading simulation platform inspired by real-world trading systems. It allows users to simulate buying and selling stocks with dynamic price updates, portfolio tracking, and real-time analytics.

---
## 🌐 Live Demo
🔗 Frontend: https://gati-stocks-trading-platform-ttka.vercel.app  
🔗 Backend: https://gatistocks-backend.onrender.com  
---
## ✨ Features
- 🔐 User Authentication (Signup/Login)
- 📊 Real-time Stock Watchlist (dynamic price updates)
- 💰 Buy & Sell Stocks with virtual balance
- 📈 Portfolio Management with Profit & Loss tracking
- 🧾 Order History (last transactions)
- 📉 Interactive Charts for market analysis
- ⚡ Fast and responsive UI
- 🌍 Fully deployed (Frontend + Backend + Database)

---
## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5, CSS3
- Axios
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- REST APIs

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)
  
---

## 🔗 API Endpoints

### Auth
- `POST /auth/signup`
- `POST /auth/login`
- `GET /auth/user/:userId`

### Stocks
- `GET /stocks`

### Trading
- `POST /trade/buy`
- `POST /trade/sell`

### Portfolio
- `GET /trade/holdings/:userId`

### Orders
- `GET /trade/orders/:userId`

---

## ⚙️ Installation (Local Setup)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/harirockg/GatiStocks-Trading-Platform.git
cd GatiStocks-Trading-Platform
