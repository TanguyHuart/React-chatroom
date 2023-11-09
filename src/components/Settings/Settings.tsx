import { X } from 'react-feather';
import './Settings.scss';

function Settings() {
  return (
    <div className="settings">
      <button type="button" className="settings__button">
        <X />
      </button>
      <form className="settings__form">
        <input
          className="settings__form-input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="settings__form-input"
          placeholder="Mot de passe"
          type="text"
        />
        <button className="settings__form-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Settings;
