const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Social Network API');
    });

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    });