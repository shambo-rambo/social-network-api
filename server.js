const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

app.use(express.json());

mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.get('/', (req, res) => {
    res.send('Social Network API');
    });

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    });

