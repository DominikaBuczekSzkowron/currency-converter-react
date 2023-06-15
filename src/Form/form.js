import "./form.css";
import { useState } from "react";
import { currencies } from "../utils/currencies.js";
import { CurrencySelector } from "./CurrencySelector/CurrencySelector";
import { InputAmount } from "./InputAmount/InputAmount";
import { CalendarWithTime } from "./CalendarWithTime/CalendarWithTime";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].symbol);
  const [amountToConvert, setAmountToConvert] = useState(null);
  const [resultText, setResultText] = useState(
    'Wpisz kwotę a następnie kliknij przycisk "Przelicz"'
  );
  const convert = (ev) => {
    ev.preventDefault();

    const rate = currencies.find((c) => currency === c.symbol).rate;
    const result = amountToConvert / rate;
    setResultText(`${amountToConvert} PLN to ${result.toFixed(2)} ${currency}`);
  };
  const onSelectChange = ({ target }) => setCurrency(target.value);

  return (
    <form onSubmit={convert} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          <strong>Twój podręczny kantor</strong>
        </legend>
        <p>
          <CalendarWithTime />
        </p>
        <p>
          <InputAmount onChange={(value) => setAmountToConvert(+value)} />
        </p>
        <p>
          <CurrencySelector
            currencies={currencies}
            onSelectChange={onSelectChange}
          />
        </p>
        <button className="form__button">
          <strong>Przelicz</strong>
        </button>
        <p className="form__note">*Pole nie może być puste</p>
        <span className="form__labelText">Po przeliczeniu:</span>
        <p className="form__result">
          <strong className="result">{resultText}</strong>
        </p>
      </fieldset>
    </form>
  );
};
export default Form;
