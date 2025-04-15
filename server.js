const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('API is now running...');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
