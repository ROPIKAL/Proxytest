const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/proxy', async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) throw new Error('URL parameter is required');
    
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
