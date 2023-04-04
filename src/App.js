import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Surprise from './Surprise';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div>
      <button onClick={ (ev) => setShowSurprise(true)}>Mostrar Sorpresa</button>
      {
        showSurprise && <Surprise />
      }
    </div>
  );
}

export default App;
