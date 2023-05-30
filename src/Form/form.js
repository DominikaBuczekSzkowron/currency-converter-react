
import "./form.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend"><strong>Twój podręczny kantor</strong></legend>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w PLN:*
                    </span>
                    <input className="form__fieldsetInput" type="number" step="0.01" min="0.01"
                        placeholder="Wpisz kwotę do przeliczenia" autoFocus required />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta:
                    </span>
                    <select className="form__fieldsetInput">
                        <option value="EUR" selected>Euro</option>
                        <option value="USD">Dolar amerykański</option>
                        <option value="GBP">Funt brytyjski</option>
                        <option value="CHF">Frank szwajcarski</option>
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button"><strong>Przelicz</strong></button>
                <p className="form__note">*Pole nie może być puste</p>
                Po przeliczeniu:
                <p className="form__result">
                    <strong className="result">Wpisz kwotę a następnie kliknij przycisk "Przelicz"</strong>
                </p>
            </p>
        </fieldset>
    </form>
);
export default Form;