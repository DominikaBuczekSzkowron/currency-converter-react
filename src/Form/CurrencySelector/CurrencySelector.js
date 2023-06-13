export const CurrencySelector = ({ currencies, onSelectChange }) => {
  return (
    <label>
      <span className="form__labelText">Waluta:</span>
      <select onChange={onSelectChange} className="form__fieldsetInput">
        {currencies.map((currency) => (
          <option key={currency.name} value={currency.symbol}>
            {currency.name}
          </option>
        ))}
      </select>
    </label>
  );
};
