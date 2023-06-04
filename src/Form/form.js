import "./form.css";
import { useState } from "react";
import { currencies } from "../utils/currencies.js";
import Header from "./Header/header";
import LabelText from "./LabelText/LabelText";
import Button from "./Button/button";
import { CurrencySelector } from "./CurrencySelector/CurrencySelector";
import { Result } from "./Result/Result";
import { InputAmount } from "./InputAmount/InputAmount";

const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].symbol);
    const [amountToConvert, setAmountToConvert] = useState(null);
    const [resultText, setResultText] = useState("Wpisz kwotę a następnie kliknij przycisk \"Przelicz\"");
    const convert = (ev) => {
        ev.preventDefault();

        const rate = currencies.find((c) => currency === c.symbol).rate;
        const result = amountToConvert / rate;
        setResultText(`${amountToConvert} PLN to ${result.toFixed(2)} ${currency}`);
    }
    const onSelectChange = ({ target }) => (setCurrency(target.value));

    return <form
        onSubmit={convert}
        className="form">
        <fieldset className="form__fieldset">
            <Header title="Twój podręczny kantor" />
            <p>
                <InputAmount onChange={(value) => setAmountToConvert(+value)} />
            </p>
            <p>
                <CurrencySelector
                    currencies={currencies}
                    onSelectChange={onSelectChange}
                />
            </p>

            <Button />
            <p className="form__note">*Pole nie może być puste</p>
            <LabelText text="Po przeliczeniu:" />
            <Result valueText={resultText} />

        </fieldset>
    </form>
};
export default Form;




