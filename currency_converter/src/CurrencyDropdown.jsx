const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  title = '',
}) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <div>
        <select
          className="form-select shadow-none"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies?.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
