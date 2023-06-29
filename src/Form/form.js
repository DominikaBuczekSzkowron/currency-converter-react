import { useEffect, useState } from "react";
import { useRates } from "./useRates.js";
import { CurrencySelector } from "./CurrencySelector/CurrencySelector";
import { InputAmount } from "./InputAmount/InputAmount";
import { CalendarWithTime } from "./CalendarWithTime/CalendarWithTime";
import LabelText from "./LabelText/LabelText.js";
import {
  OnForm,
  Fieldset,
  Legend,
  Button,
  Note,
  Result,
  Loading,
  Error,
} from "./styled";

const Form = () => {
  const [currencies, dateOfCurrenciesFetch, fetchstate] = useRates();
  const [currency, setCurrency] = useState(undefined);
  const [amountToConvert, setAmountToConvert] = useState(null);
  const [resultText, setResultText] = useState(
    'Wpisz kwotę a następnie kliknij przycisk "Przelicz"'
  );
  useEffect(() => {
    setCurrency(currencies[0].symbol);
  }, [currencies]);

  const convert = (ev) => {
    ev.preventDefault();

    const rate = currencies.find((c) => currency === c.symbol).rate;
    const result = amountToConvert * rate;
    setResultText(`${amountToConvert} PLN to ${result.toFixed(2)} ${currency}`);
  };
  const onSelectChange = ({ target }) => setCurrency(target.value);

  return (
    <OnForm onSubmit={convert}>
      {fetchstate.state === "loading" ? (
        <Loading>Spokojnie, trwa ładowanie strony ☕︎ </Loading>
      ) : fetchstate.state === "error" ? (
        <Error>
          To tylko błąd: "{fetchstate.info}".
          <br />
          Jeśli Twoje połączenie z internetem jest ok, to wina leży po naszej
          stronie 😎
          <br /> Wdech, wydech i spróbuj później jeszcze raz! 💪
        </Error>
      ) : (
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
          <p>
            {`Wartości pobrane ze strony www.exchangerate.host z dnia ${dateOfCurrenciesFetch}`}
          </p>
        </Fieldset>
      )}
    </OnForm>
  );
};
export default Form;
