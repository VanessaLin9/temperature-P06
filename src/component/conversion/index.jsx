// import React, { useEffect } from 'react';
import './Conversion.css';

type ConversionProps = {
  inputF: number,
  inputC: number,
  holderF: number,
  holderC: number,
  onChange: (e) => void,
  onClick: (e) => void,
};

const Conversion: React.FC<ConversionProps> = (props) => {
  const { inputF, inputC, holderF, holderC, onChange, onClick } = props;

  return (
    <section>
      
        {/* <form> */}
        <label className="inputLabel">
          <input
            id="inputF"
            type="number"
            className="my-input"
            placeholder={holderF}
            value={inputF}
            onChange={onChange}
            onClick={onClick}
            // disabled={disableF}
          />
          &deg;F
        </label>
        <label className="inputLabel">
          <input
            id="inputC"
            type="number"
            className="my-input"
            placeholder={holderC}
            value={inputC}
            onChange={onChange}
            onClick={onClick}
            // disabled={disableC}
          />
          &deg;C
        </label>
        {/* </form> */}
      
    </section>
  );
};

export default Conversion;
