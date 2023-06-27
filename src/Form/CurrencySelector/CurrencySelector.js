import LabelText from "../LabelText/LabelText";
import { OnSelect } from "./styled";

export const CurrencySelector = ({ currencies, onSelectChange }) => {
  return (
    <label>
      <LabelText text="Waluta:" />
      <OnSelect onChange={onSelectChange}>
        {currencies.map((currency) => (
          <option key={currency.symbol} value={currency.symbol}>
            {currency.symbol}
          </option>
        ))}
      </OnSelect>
    </label>
  );
};
