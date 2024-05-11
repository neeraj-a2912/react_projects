import { useEffect, useState } from 'react';
import CurrencyDropdown from './CurrencyDropdown';

const Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('IND');
  const [convertedAmt, setConvertedAmt] = useState(null);

  const fetchCurrencies = async () => {
    try {
      const res = await fetch('https://api.frankfurter.app/currencies');
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error('Error Fetching', error);
    }
  };
  useEffect(() => {
    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmt(data.rates[toCurrency]);
      console.log(convertedAmt);
    } catch (error) {
      console.error('Error Converting,', error);
    }
  };

  return (
    <div className="converter">
      <h4>Currency Converter</h4>
      <div className="currencies d-flex justify-content-between">
        <div className="from">
          <CurrencyDropdown
            currencies={currencies}
            title="From"
            currency={fromCurrency}
            setCurrency={setFromCurrency}
          />
        </div>
        <div className="to">
          <CurrencyDropdown
            currencies={currencies}
            title="To"
            currency={toCurrency}
            setCurrency={setToCurrency}
          />
        </div>
      </div>
      <div className="result my-2">
        <input
          type="number"
          className="form-control shadow-none"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="convert-button">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => convertCurrency()}
        >
          Convert
        </button>
      </div>
      <div className="converted-amt mx-auto">
        {convertedAmt && (
          <h6 style={{ textAlign: 'center', color: 'blue' }}>
            Amount is {convertedAmt} {toCurrency}
          </h6>
        )}
      </div>
    </div>
  );
};

export default Converter;
