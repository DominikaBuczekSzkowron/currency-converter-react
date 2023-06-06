import "./Result.css";

export function Result({ valueText }) {
  return (
    <p className="form__result">
      <strong className="result">{valueText}</strong>
    </p>
  );
}
