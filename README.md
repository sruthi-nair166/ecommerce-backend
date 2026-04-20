# E-Commerce Backend System

## Table of contents

- [About](#about)
  - [Links](#links)
  - [Overview](#overview)
  - [Features](#features)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## About

### Overview

This project is a backend-only E-Commerce System built using Node.js and Express. It provides a set of RESTful API endpoints to manage users, products, and orders. The system supports authentication with JWT, role-based access control (RBAC), product filtering and search, and a simple analytics-based recommendation feature. Data is managed using in-memory arrays with a modular structure separating controllers, routes, and middleware.

### Features

- **Authentication & Authorization** <br />
  User registration and login using bcryptjs for password hashing and jsonwebtoken for secure token-based authentication. Includes role-based access control (admin/user) to protect sensitive routes.

- **Product Management (CRUD)** <br />
  Create, read, update, and delete products with proper API structure and in-memory data handling.

- **Product Filtering & Search** <br />
  Supports filtering products by category, searching by name, filtering by price, and sorting by price (ascending/descending).

- **Order Management (CRUD)** <br />
  Allows users to place orders, view orders, update order status, and delete orders.

- **User Profile Management** <br />
  Basic user profile creation and management with protected routes.

- **Analytics (Recommendation System)** <br />
  Simple recommendation system that filters products based on category or returns randomized suggestions to simulate intelligent product recommendations.

- **In-Memory Data Storage** <br />
  All data (users, products, orders) is stored in runtime memory using arrays, simulating backend behavior without persistent storage.

- **Middleware Support** <br />
  Includes authentication middleware for JWT verification and role-based access control.

- **RESTful API Design** <br />
  Well-structured REST APIs with consistent request/response formats.

### Built With

- Node.js
- Express
- JavaScript
- bcryptjs
- jsonwebtoken
- MongoDB (configured via Mongoose, connection setup included)

## Author

- LinkedIn - [Sruthi V Nair](https://www.linkedin.com/in/sruthi-v-nair-5b5a09191/)
- Github - [Sruthi V Nair](https://github.com/sruthi-nair166)

## Acknowledgments

This project was built as part of an assignment in the Full Stack Development course I'm currently enrolled in, offered by Entri Elevate. Special thanks to the course instructors and materials for the guidance and support.
