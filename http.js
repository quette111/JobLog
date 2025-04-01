// server.js
const express = require('express');
const path = require('path');
require('dotenv').config();
const apiRouter = require('./api'); // Import the router for serving JSON data
const app = express();
const PORT = process.env.PORT || 1010;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Use the API router for handling `/data.json` route
app.use(apiRouter, express.json() );

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/config', (req, res) => {
  res.json({
    apiKey: process.env.API_KEY,  
  });
});

app.post('/apii/submit', (req, res) => {
  console.log(req.body)
})

// Handle 404 for other routes
app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${PORT} is already in use. Trying another port...`);
      app.listen(0, () => console.log(`New port assigned: ${server.address().port}`));
    } else {
      console.error(err);
    }
  });
