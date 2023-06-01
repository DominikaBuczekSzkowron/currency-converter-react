import LabelText from "../LabelText/LabelText";

export const CurrencySelector = () => {
    return <label>
        <LabelText text="Waluta:" />

        <select className="form__fieldsetInput">
            <option value="EUR" selected>Euro</option>
            <option value="USD">Dolar amerykański</option>
            <option value="GBP">Funt brytyjski</option>
            <option value="CHF">Frank szwajcarski</option>
        </select>
    </label>;
};
