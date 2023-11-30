require('dotenv').config();
const express = require('express');
const { fetchRestraunt } = require('./fetchRestraunt'); // fetchRestaurant関数をインポート

const app = express();
const cors = require('cors');
const { choiceRestraunt } = require('./choiceRestraunt');
const port = 3001;

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
    const lat = req.query.lat;//緯度
    const lng = req.query.lng;//経度
    const restraunt = await fetchRestraunt(lat, lng);
    console.log(lat, lng)
    const selectedRestraunt = choiceRestraunt(restraunt);
    console.log(selectedRestraunt)
    res.json(selectedRestraunt);
  });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});