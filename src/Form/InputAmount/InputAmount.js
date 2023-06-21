import LabelText from "../LabelText/LabelText";
import { OnInput } from "./styled";

export function InputAmount({ onChange }) {
  return (
    <label>
      <LabelText text="Kwota w PLN:*" />
      <OnInput
        onChange={(event) => onChange(event.target.value)}
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
