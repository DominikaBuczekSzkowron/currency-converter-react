import LabelText from "../LabelText/LabelText";

export function InputAmount({onChange}) {
    return <label>
        <LabelText text="Kwota w PLN:*" />
        <input
            onChange={(event) => onChange(event.target.value)}
            className="form__fieldsetInput"
            type="number" step="0.01" min="0.01"
            placeholder="Wpisz kwotę do przeliczenia"
            autoFocus required />
    </label>;
}
