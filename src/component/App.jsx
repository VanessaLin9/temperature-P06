import { useState, useEffect } from 'react';
import Conversion from './Conversion';
import Weather from './Weather';
import OpenWeather from './OpenWeather';



const App = () => {
  const [inputF, setInputF] = useState('');
  const [inputC, setInputC] = useState('');
  const [holderF, setHolderF] = useState('320');
  const [holderC, setHolderC] = useState('160');
  // const {weather} = useWeather();
  // const {openWeather} = useOpenWeather();

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
      converC = converC.toFixed(2);
    }
    setHolderC(converC);
  }, [inputF]);

  useEffect(() => {
    let converF = (inputC * 9) / 5 + 32;
    if (converF % 1 !== 0) {
      converF = converF.toFixed(2);
    }
    setHolderF(converF);
  }, [inputC]);

  const atClickBody = (e) => {
    const input = document.querySelector('#input-toggle_openWeather')
    if(input.checked === true) {
      if(e.target === e.currentTarget){
        console.log('return')
      }
    }
  }

  return (
    <div 
      className="App"  
      onClick={(e) => atClickBody(e)}>
      <div className="weather-container">
       <Weather />
       <OpenWeather />
      </div>
      
      <Conversion
        inputF={inputF}
        inputC={inputC}
        holderF={holderF}
        holderC={holderC}
        onChange={atChange}
        onClick={(e) => atClick(e)}
      />
    </div>
  );
};

export default App;
