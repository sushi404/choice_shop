
export function printRestraunt(selectedRestraunt) {
    // Get the restaurant details
    const name = selectedRestraunt.name;
    const address = selectedRestraunt.vicinity;
    const rating = selectedRestraunt.rating;
    const place_id = selectedRestraunt.place_id;

    // Update the UI to display the details of the selected restaurant
    // ...
    return(
        <div>
            <h1>店名:{name}</h1>
            <h2>住所:{address}</h2>
            <h2>評価:{rating}</h2>
        </div>
    )
  }