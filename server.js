
const express = require('express');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Hello! Node.js server is running on port 3000 🚀');
});

// API route
app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'David' },
        { id: 3, name: 'Alex' }
    ]);
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
