🚀 Zerodha Clone

A full-stack Zerodha Clone built using the MERN stack with separate frontend (landing page), dashboard, and backend services.

📌 Tech Stack
🔹 Frontend
React.js
Bootstrap
Material UI
🔹 Backend
Node.js
Express.js
🔹 Database
MongoDB
```js
📂 Folder Structure
.
├── about/
│   ├── AboutPage.js
│   ├── Hero.js
│   └── Team.js
│
├── home/
│   ├── Awards.js
│   ├── Education.js
│   ├── Hero.js
│   ├── Homepage.js
│   ├── Navbar.js
│   ├── OpenAccount.js
│   ├── Pricing.js
│   └── Stats.js
│
├── pricing/
│   ├── Brokerage.js
│   ├── Hero.js
│   └── PricingPage.js
│
├── product/
│   ├── Hero.js
│   ├── left.js
│   ├── RightSection.js
│   └── Unvierse.js
│
├── signup/
│   └── Signup.js
│
├── support/
│   ├── CreateTicket.js
│   ├── Hero.js
│   └── SupportPage.js
│
├── Footer.js
├── OpenAccount.js

```
⚙️ Project Structure Overview
Frontend (Landing Page)
→ Static pages like Home, About, Pricing, Product, Signup
Dashboard (Separate App)
→ Connected to backend APIs
→ Shows user data (holdings, etc.)
Backend (API Server)
→ Handles authentication (Signup/Login)
→ Provides protected APIs
🔐 Features
User Signup & Login (JWT Authentication)
Protected Dashboard
API Integration with Axios
MongoDB Database Integration
Responsive UI with Bootstrap & MUI
🔄 Application Flow
User visits Frontend (Landing Page)
User signs up / logs in
Backend generates JWT Token
Token stored in localStorage
User redirected to Dashboard
Dashboard fetches protected data using token
🛠️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/viakshage21/zerodha_clone.git
cd zerodha_clone
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

MONGODB_URL=your_mongodb_connection
SECRET_TOKEN=your_secret_key

Run backend:

npm start
3️⃣ Frontend Setup
cd frontend
npm install
npm start
4️⃣ Dashboard Setup
cd dashboard
npm install
npm start
🌐 API Endpoints
🔹 Auth
POST /signup → Register user
POST /login → Login user
🔹 Protected
GET /allholding → Get user holdings
🔑 Authentication
JWT-based authentication
Token stored in localStorage
Protected routes using middleware
📦 Tools Used
Axios (API calls)
CORS (cross-origin requests)
dotenv (environment variables)
bcrypt (password hashing)
🚀 Future Improvements
Add real-time stock data
Implement charts (Recharts / Chart.js)
Add user profile management
Improve UI animations
👨‍💻 Author

Vikash Kumar
Full Stack Developer (MERN)

⭐ Note

This project is for learning and practice purposes only and inspired by Zerodha UI.
