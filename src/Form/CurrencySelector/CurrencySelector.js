import LabelText from "../LabelText/LabelText";

export const CurrencySelector = ({ currencies, onSelectChange }) => {

    return (<label>
        <LabelText text="Waluta:" />
        <select
            onChange={onSelectChange}
            className="form__fieldsetInput" >
            {
                currencies.map(currency =>
                    <option key={currency.name} value={currency.symbol}>
                        {currency.name}
                    </option>)
            }
        </select>
    </label >);
};