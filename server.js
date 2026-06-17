const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('<h1>Hello from AWS ECS! Version 1.0</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
