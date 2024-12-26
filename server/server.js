const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// Basic Routing
app.get('/', (req, res) => {
  res.send('TaskHub Backend is running!');
});

// Starting the  Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});