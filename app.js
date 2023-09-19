// server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3009;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'client-registration')));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,  'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
