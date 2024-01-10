require('dotenv').config();
const express = require('express');
const { fetchShop } = require('./fetchShop');

const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.get('/api/', async (req, res) => {
  const lat = req.query.lat;
  const lng = req.query.lng;
  try {
      const shops = await fetchShop(lat, lng);
        res.json({ results: shops });  
        console.log("shops:" + JSON.stringify(shops, null, 2));
        
  } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
  }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});