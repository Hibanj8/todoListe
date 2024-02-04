# To-Do List MERN Stack

## Description of the Application Architecture

The To-Do List MERN Stack project is a web application based on the MERN stack (MongoDB, Express.js, React.js, Node.js). This architecture enables the development of modern web applications using JavaScript on both the client and server sides.

### Components of the Architecture

- **MongoDB:** NoSQL database for storing to-do list tasks.
- **Express.js:** Node.js framework to build the server infrastructure.
- **React.js:** JavaScript library on the client side for building the user interface.
- **Node.js:** Server-side runtime environment for JavaScript.
- **Vite:** Build tool for the frontend, providing fast development and optimized production builds.
- **Jest:** Testing framework for JavaScript projects.

## Installation and Configuration Guide

### Prerequisites

- **Node.js and npm:** Ensure that Node.js and npm are installed locally.
- **MongoDB:** Install MongoDB and ensure it is running locally.

### Installation Steps

1. **Backend:**
   - Navigate to the `backend` folder.
   - Run `npm install` to install dependencies.
   - Configure environment variables in a `.env` file.
   - Run `npm start` to launch the server.

2. **Frontend:**
   - Navigate to the `frontend` folder.
   - Run `npm install` to install dependencies.
   - Configure the API URL in configuration files if necessary.
   - Run `npm run dev` to launch the Vite development server.
   - Run `npm run build` to generate an optimized production build.

## Details on Libraries and External Dependencies

### Backend

- Express.js
- Mongoose (ODM for MongoDB)
- dotenv (loading environment variables)

### Frontend

- React.js
- Vite
- Jest (for testing)
- axios (for HTTP requests)
- react-router-dom (for route management)
- styled-components (or another styling library)

This project follows modern web development conventions and best practices for scalability, maintainability, and security. Refer to the specific documentation for each library or technology for more information.
