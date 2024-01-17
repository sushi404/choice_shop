const axios = require('axios');
const config = require('./config.js');
const genres = require('./genres.js');

module.exports.fetchShop = async function(lat,lng){
    const apiUrl = 'https://places.googleapis.com/v1/places:searchNearby';
    const genre = Object.values(genres);
    const requestData = {
        includedTypes: genre,
        languageCode: 'ja',
        locationRestriction:{
            circle:{
                center:{
                    latitude: lat,
                    longitude: lng
                },
                radius: 1000
                }
            }
    };
    const headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': config.apiKey,
        'X-Goog-FieldMask':'places.displayName,places.googleMapsUri'
    };

    try{
        const response = await axios.post(apiUrl, requestData, {headers: headers});
        const places = response.data.places;
        const randomPlaces = [];
    
        for(let i = 0; i < 1; i++){
            const randomIndex = Math.floor(Math.random() * places.length);
            randomPlaces.push(places[randomIndex]);
            places.splice(randomIndex, 1);
        }
    
        return randomPlaces;
    }catch(error){
        console.error(error.message);
        console.log(error.response.data);
    }

}