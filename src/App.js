import React,{useState} from 'react' ;
import './App.css';

import Filter from './Filter'

function App() {
  const [changed, setChanged] = useState(false) ;
  return (
    <div className="App">
      <h1>Bored</h1>
      <button type='submit' onClick={() => setChanged(true)}>Get an Activity </button>
      {changed === true ?
      <Filter /> 
    : null
    }
    </div>
  );
}

export default App;
