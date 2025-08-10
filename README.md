# DineFrenzy Order Flow

This project is a full-stack food ordering application with a React (Vite) frontend and a Spring Boot backend.

## Project Structure

- **Frontend:** `dinefrenzy-order-flow-main/dinefrenzy-order-flow-main`
  - Built with React, Vite, Tailwind CSS
  - Handles user login, menu display, cart, and order placement
- **Backend:** `dinefrenzy-order-flow-main/simple-food-ordering-backend`
  - Built with Spring Boot
  - Provides REST API for authentication, food items, and orders
  - Uses in-memory H2 database by default

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Java 17+
- Maven (for initial setup, then Maven Wrapper is available)

### Running the Frontend
1. Open a terminal and navigate to the frontend directory:
   ```sh
   cd dinefrenzy-order-flow-main/dinefrenzy-order-flow-main
   npm install
   npm run dev
   ```
2. The app will be available at [http://localhost:8080](http://localhost:8080)

### Running the Backend
1. Open a terminal and navigate to the backend directory:
   ```sh
   cd dinefrenzy-order-flow-main/simple-food-ordering-backend
   ./mvnw spring-boot:run
   ```
2. The API will be available at [http://localhost:8081](http://localhost:8081)

### H2 Database Console
- Access at [http://localhost:8081/h2-console](http://localhost:8081/h2-console)
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa` (no password)

## API Endpoints

- `POST /api/auth/login` — Demo login (any username/password)
- `GET /api/food` — List food items
- `POST /api/food` — Add a food item
- `GET /api/orders` — List orders
- `POST /api/orders` — Place an order
- `PUT /api/orders/{id}/status` — Update order status

## Notes
- The backend uses a demo authentication system (no real user storage).
- Food and order data are stored in-memory and reset on backend restart.

## License
MIT
