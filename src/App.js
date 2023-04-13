import React, {useEffect, useState, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';

const Surprise = React.lazy(() => import('./Surprise'));

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div>
      <button onClick={ (ev) => setShowSurprise(true)}>Mostrar Sorpresa</button>
      {
        showSurprise && <Suspense fallback={ <p>Cargando...</p>}> <Surprise /> </Suspense>
      }
    </div>
  );
}

export default App;
