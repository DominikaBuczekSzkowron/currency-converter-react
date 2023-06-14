import "./CurrencySelector.css";
import LabelText from "../LabelText/LabelText";

export const CurrencySelector = ({ currencies, onSelectChange }) => {
  return (
    <label className="currencySelector">
      <LabelText text="Waluta:" />
      <select
        onChange={onSelectChange}
        className="currencySelector__fieldsetInput"
      >
        {currencies.map((currency) => (
          <option key={currency.name} value={currency.symbol}>
            {currency.name}
          </option>
        ))}
      </select>
    </label>
  );
};
