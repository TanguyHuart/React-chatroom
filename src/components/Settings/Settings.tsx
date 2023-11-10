import { ChangeEvent, FormEvent } from 'react';
import { X } from 'react-feather';
import './Settings.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeEmailInput,
  changeLoginState,
  changePasswordInput,
} from '../../store/reducers/formLogin';

function Settings() {
  const dispatch = useAppDispatch();
  const loginFormIsVisible = useAppSelector(
    (state) => state.loginForm.loginFormIsVisible
  );
  const emailInputValue = useAppSelector((state) => state.loginForm.emailInput);
  const passwordInputValue = useAppSelector(
    (state) => state.loginForm.passwordInput
  );
  const handleOnClickSettingFormState = () => {
    dispatch(changeLoginState());
  };

  function handleOnChangeEmailInput(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    dispatch(changeEmailInput(event.target.value));
  }

  function handleOnChangePasswordInput(
    event: ChangeEvent<HTMLInputElement>
  ): void {
    dispatch(changePasswordInput(event.target.value));
  }

  function handleOnSubmitLoginForm(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <div className={`settings ${loginFormIsVisible ? '' : 'settings--hidden'}`}>
      <div className={`${loginFormIsVisible ? 'spin' : 'spinout'}`}>
        <button
          type="button"
          className="settings__button"
          onClick={handleOnClickSettingFormState}
        >
          <X />
        </button>
      </div>

      <form className="settings__form" onSubmit={handleOnSubmitLoginForm}>
        <input
          className="settings__form-input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleOnChangeEmailInput}
          value={emailInputValue}
        />
        <input
          className="settings__form-input"
          placeholder="Mot de passe"
          type="text"
          name="password"
          onChange={handleOnChangePasswordInput}
          value={passwordInputValue}
        />
        <button className="settings__form-button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Settings;
