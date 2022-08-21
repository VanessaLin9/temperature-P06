import React from 'react';
import './App.css';
import Conversion from './conversion';

const App = () => {
  const [inputF, setInputF] = React.useState('');
  const [inputC, setInputC] = React.useState('');
  const [holderF, setHolderF] = React.useState('320');
  const [holderC, setHolderC] = React.useState('160');

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

  React.useEffect(() => {
    let converC = ((inputF - 32) * 5) / 9;
    if (converC % 1 !== 0) {
      converC = converC.toFixed(4);
    }
    setHolderC(converC);
  }, [inputF]);

  React.useEffect(() => {
    let converF = (inputC * 9) / 5 + 32;
    if (converF % 1 !== 0) {
      converF = converF.toFixed(4);
    }
    setHolderF(converF);
  }, [inputC]);

  return (
    <div className="App">
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
