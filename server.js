const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Configure Multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Middleware for parsing JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle file uploads
app.post('/upload', upload.single('htmlFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
    // Read the uploaded file
    fs.readFile(req.file.path, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file.');
        }

        // Process the uploaded HTML code (you can implement your logic here)
        // For demonstration, let's just return the uploaded content as is
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});