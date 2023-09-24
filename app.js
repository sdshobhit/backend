// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Port on which the server will run

// Middleware to parse JSON request bodies
app.use(express.json());

// Define your routes and route handlers here
app.get('/', (req, res) => {
  res.send('Hello, World! This is your Node.js backend.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
