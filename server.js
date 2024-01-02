const express = require('express');
const connectDB = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.get('/', (req, res) => {
    res.send('Social Network API');
    });

connectDB();

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    });

