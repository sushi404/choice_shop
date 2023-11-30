const axios = require('axios');
const config = require('./config.js');

module.exports.fetchRestraunt = async function(lat, lng) {
    const apiKey = config.apiKey;
    console.log(apiKey);  // デバッグ出力
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&type=restaurant&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        console.log(response);  // デバッグ出力
        const data = response.data;
        const nearbyRestaurants = data.results;
        return nearbyRestaurants;
    } catch (error) {
        console.error(error);  // エラーハンドリング
    }
}