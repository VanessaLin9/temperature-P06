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
    <div className="conversion-container">
      <div className="converter-title">
        <h4>Temperature Converter</h4>
      </div>
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
      
    </div>
  );
};

export default Conversion;