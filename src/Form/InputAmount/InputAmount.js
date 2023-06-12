export function InputAmount({ onChange }) {
  return (
    <label>
      <span className="form__labelText">"Kwota w PLN:*"</span>
      <input
        onChange={(event) => onChange(event.target.value)}
        className="form__fieldsetInput"
        type="number"
        step="0.01"
        min="0.01"
        placeholder="Wpisz kwotę do przeliczenia"
        autoFocus
        required
      />
    </label>
  );
}
