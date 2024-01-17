import React, { useEffect, useState } from 'react';
import './App.css';
import {getUserLocation} from './components/getUserLocation';
import {printShop} from './components/printShop';
import Button from '@mui/material/Button';


function App() {
  const [shop, setShop] = useState(null);

  const handleSearch = async () => {
    try {
      const { lat, lng } = await getUserLocation();
  
      const response = await fetch(`http://localhost:3001/api/?lat=${lat}&lng=${lng}`);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
  
      const data = await response.json();
  
      const nearbyShops = data.results;
      console.log("nearbyShops:",nearbyShops);
  
      setShop(nearbyShops);
    } catch (error) {
      console.error('Failed to fetch restraunt data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          今日のお昼はここにしよう！
        </p>
        <Button onClick={handleSearch} variant="contained">さがす</Button>
      </header>
      <div id="shop">
        {shop && printShop(shop)}
      </div>
    </div>
  );
}

export default App;