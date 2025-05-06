import React, { useEffect, useState } from 'react';
import './App.css';
import { getAvailableFruits } from './api/getFruits';
import FruitComponent from './Fruit';

const App = () => {
  const [availableFruits, setAvailableFruits] = useState<string[]>(getAvailableFruits(''));
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  return (
    <div className="app" style={{ padding: '10px' }}>
      <div className="input-fruit-container">
        {availableFruits.map((fruitName) => (
          <button key={fruitName}>{fruitName}</button>
        ))}
      </div>

      <br />

      <input placeholder="Search fruits..." />

      <hr style={{ width: '100%' }} />

      {selectedFruits.map((fruit, index) => (
        <FruitComponent key={fruit} index={index} fruitName={fruit} />
      ))}
    </div>
  );
};

export default App;
