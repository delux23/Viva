const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();
app.use(cors());
// Serve static files from the 'public' directory
app.use(express.static(('public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-in.html'));
});4

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-up.html'));
});

app.get('/todo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'expense.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Frontend server is running on port ${PORT}`);
});
