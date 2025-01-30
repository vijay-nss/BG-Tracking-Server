const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.post('/api/latlon', (req, res) => {
    console.log('Received data:', req.body);
    console.log(new Date().toLocaleTimeString());
    res.status(200).json('Received');
});

app.post('/api/version', (req, res) => {
    console.log(req.body);
    
    const isLatestVersion = req.body.Version === '5.0.0';
    console.log(isLatestVersion);
    
    res.status(200).send(isLatestVersion)
});



const port = 2222;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
