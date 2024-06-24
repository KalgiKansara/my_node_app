const express = require('express');
const app = express();
const PORT = 3000;

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'API endpoint 1' });
});

app.get('/api/users', (req, res) => {
    res.json({ message: 'API endpoint 2' });
});

app.get('/api/posts', (req, res) => {
    res.json({ message: 'API endpoint 3' });
});

app.get('/api/comments', (req, res) => {
    res.json({ message: 'API endpoint 4' });
});

app.get('/api/profile', (req, res) => {
    res.json({ message: 'API endpoint 5' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
