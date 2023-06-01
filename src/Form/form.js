import "./form.css";
import { useState } from "react";
import { currencies } from "../utils/currencies";
import Header from "./Header/header";
import LabelText from "./LabelText/LabelText";
import Button from "./Button/button";
import { CurrencySelector } from "./CurrencySelector/CurrencySelector";
import { Result } from "./Result/Result";
import { InputAmount } from "./InputAmount/InputAmount";

//currencies()

// const [amountToConvert, setAmount] = useState("");
// const onFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(`wysłano kwotę:  `);
// };


const Form = () => {
    const [amountToConvert, setAmount] = useState(null);
    return <form
        // onSubmit={onFormSubmit} 
        className="form">
        <fieldset className="form__fieldset">
            <Header title="Twój podręczny kantor" />
            <p>
                <InputAmount />
            </p>
            <p>
                <CurrencySelector />
            </p>
            <p>
                <Button />
                <p className="form__note">*Pole nie może być puste</p>
                <LabelText text="Po przeliczeniu:" />
                <Result />
            </p>
        </fieldset>
    </form>
};
export default Form;




