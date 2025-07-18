# 🚖 Uber Microservice Architecture

This is a ride-sharing backend system built with **Node.js**, **MongoDB**, and **RabbitMQ** using a **microservices architecture**.

## 🧱 Microservices Overview

### 1. 🧑‍💼 User Service
- Manages users who book rides.
- Handles user registration, login, and authentication.
- Emits ride creation requests to the **Ride Service** via RabbitMQ.

### 2. 🚗 Captain Service
- Handles captains (riders) who accept rides.
- Manages captain registration, location updates, and ride acceptance.
- Listens to ride assignment events from the **Ride Service**.

### 3. 🛣️ Ride Service
- Central service for managing rides.
- Listens to ride creation events from **User Service**.
- Assigns captains and emits updates to **Captain** and **User** services.

### 📨 Communication
All services communicate using **RabbitMQ** for asynchronous message passing.

---

## 📦 Tech Stack

- Node.js + Express.js
- MongoDB (Mongoose)
- RabbitMQ (AMQP)
- JWT (Authentication)
- Docker + Docker Compose (optional for full system)



