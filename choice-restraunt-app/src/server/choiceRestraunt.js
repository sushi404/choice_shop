function choiceRestraunt(nearbyRestaurants) {
    const randomIndex = Math.floor(Math.random() * nearbyRestaurants.length);
    const selectedRestraunt = nearbyRestaurants[randomIndex];
    return selectedRestraunt;
}

module.exports.choiceRestraunt = choiceRestraunt;