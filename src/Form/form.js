import "./form.css";
import { useState } from "react";
import { currencies } from "../utils/currencies.js";
import { CurrencySelector } from "./CurrencySelector/CurrencySelector";
import { InputAmount } from "./InputAmount/InputAmount";
import { CalendarWithTime } from "./CalendarWithTime/CalendarWithTime";
import LabelText from "./LabelText/LabelText.js";
import { OnForm, Fieldset, Legend, Button, Note, Result } from "./styled";

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
    <OnForm onSubmit={convert}>
      <Fieldset>
        <Legend>
          <strong>Twój podręczny kantor</strong>
        </Legend>
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
        <Button>
          <strong>Przelicz</strong>
        </Button>
        <Note>*Pole nie może być puste</Note>
        <LabelText text="Po przeliczeniu:" />
        <Result>
          <strong>{resultText}</strong>
        </Result>
      </Fieldset>
    </OnForm>
  );
};
export default Form;
