# Stars Dictionary App

✨

Welcome to the Stars Dictionary App! 🌌 This full-stack application allows users to explore and manage information about stars, creating their own celestial dictionary.

## Overview

The Stars Dictionary App provides a RESTful API for interacting with a MongoDB database to store and retrieve information about various stars. On the frontend, users can view, add, update, and delete stars from their personal celestial journal.

## Backend Stack

### Technologies Used

- **Node.js:** A runtime environment for executing JavaScript on the server.
- **Express:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A NoSQL database for storing star-related data.
- **Mongoose:** An elegant MongoDB object modeling tool for Node.js.
- **Nodemon:** A utility that monitors for changes in files and automatically restarts the server.

### Project Structure

The backend follows a modular structure, with key components:

- **`server.js`:** The main entry point for the Express server.
- **`models/star.js`:** Defines the Mongoose model for stars.
- **`routes/stars.js`:** Handles RESTful API routes for star-related operations.
- **`app.js`:** Configures the MongoDB connection.


### Getting Started with the Backend

1. Install dependencies: `npm install`
2. Start the server: `nodemon server.js`
3. Access the API at `http://localhost:3000`

## Frontend Stack

### Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making requests to the backend API.
- **React Router:** A library for handling navigation in a React application.
- **Styled Components:** For styling React components with tagged template literals.

### Project Structure

The frontend is organized into components and follows a container-presentation pattern:

- **`src/components/`:** Reusable UI components.

### Getting Started with the Frontend

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Open the app at `http://localhost:3000`


##
Happy stargazing! ✨🔭
