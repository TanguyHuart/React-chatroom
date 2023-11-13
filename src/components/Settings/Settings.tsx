import clsx from 'clsx';
import { ChangeEvent, FormEvent } from 'react';
import { X } from 'react-feather';
import './Settings.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeInputValue,
  changeLoginState,
  login,
} from '../../store/reducers/formLogin';

function Settings() {
  const dispatch = useAppDispatch();
  const loginFormIsVisible = useAppSelector(
    (state) => state.loginForm.loginFormIsVisible
  );
  const emailInputValue = useAppSelector(
    (state) => state.loginForm.credentials.email
  );
  const passwordInputValue = useAppSelector(
    (state) => state.loginForm.credentials.password
  );
  const handleOnClickSettingFormState = () => {
    dispatch(changeLoginState());
  };

  const handleOnChangeEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeInputValue({
        fieldName: 'email',
        value: event.target.value,
      })
    );
  };

  const handleOnChangePasswordInput = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      changeInputValue({
        fieldName: 'password',
        value: event.target.value,
      })
    );
  };

  const handleOnSubmitLoginForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      login({
        email: emailInputValue,
        password: passwordInputValue,
      })
    );
  };

  return (
    <div
      className={clsx('settings', { 'settings--hidden': !loginFormIsVisible })}
    >
      <button
        type="button"
        className="settings__button"
        onClick={handleOnClickSettingFormState}
      >
        <X />
      </button>

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
