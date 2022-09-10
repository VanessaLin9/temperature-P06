import { useState, useEffect } from 'react';
import './App.css';
import Conversion from './Conversion';
import Weather from './Weather';
import useWeather from '../Hooks/useWeather'


const App = () => {
  const [inputF, setInputF] = useState('');
  const [inputC, setInputC] = useState('');
  const [holderF, setHolderF] = useState('320');
  const [holderC, setHolderC] = useState('160');
  const {weather} = useWeather();

  const atChange = (e) => {
    if (e.target.id === 'inputF') {
      setInputF(e.target.value);
    } else if (e.target.id === 'inputC') {
      setInputC(e.target.value);
    }
  };
  const atClick = (e) => {
    if (e.target.id === 'inputF') {
      setInputC('');
    } else if (e.target.id === 'inputC') {
      setInputF('');
    }
  };

  useEffect(() => {
    let converC = ((inputF - 32) * 5) / 9;
    if (converC % 1 !== 0) {
      converC = converC.toFixed(4);
    }
    setHolderC(converC);
  }, [inputF]);

  useEffect(() => {
    let converF = (inputC * 9) / 5 + 32;
    if (converF % 1 !== 0) {
      converF = converF.toFixed(4);
    }
    setHolderF(converF);
  }, [inputC]);

  return (
    <div className="App">
      <div className="container">
      <Conversion
        inputF={inputF}
        inputC={inputC}
        holderF={holderF}
        holderC={holderC}
        onChange={atChange}
        onClick={(e) => atClick(e)}
      />
      <Weather weather={weather} />
      </div>
    </div>
  );
};

export default App;
