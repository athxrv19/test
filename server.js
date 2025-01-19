const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Handle form submissions
app.post('/submit', (req, res) => {
    console.log('Received a form submission');
    console.log('Request body:', req.body);

    const { name, message } = req.body;

    if (!name || !message) {
        console.error('Name or message missing');
        return res.status(400).send('Name and message are required!');
    }

    console.log(`Name: ${name}, Message: ${message}`);
    res.status(200).send('Form submitted successfully');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
