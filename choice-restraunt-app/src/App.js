import React, { useState } from 'react';
import './App.css';
import {getUserLocation} from './components/getUserLocation';
import {printRestraunt} from './components/printRestraunt';


function App() {
  const [restraunt, setRestraunt] = useState(null);

  const handleSearch = async () => {
    try {
      const { lat, lng } = await getUserLocation();
  
      const response = await fetch(`http://localhost:3001/api/restaurants?lat=${lat}&lng=${lng}`);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("json:"+data);  // デバッグ出力
  
      const nearRestraunt = data.results;
      console.log("nearRestraunt:"+nearRestraunt);
  
      setRestraunt(data);
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
        <button onClick={handleSearch}>お店を探す</button>
      </header>
      <div id="restraunt">
        {restraunt && printRestraunt(restraunt)}
      </div>
    </div>
  );
}

export default App;