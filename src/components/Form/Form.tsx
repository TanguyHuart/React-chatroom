import { ChangeEvent, FormEvent } from 'react';
import './Form.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeInput } from '../../store/reducers/form';
import { addNewMessage } from '../../store/reducers/chat';

function Form() {
  const inputValue = useAppSelector((state) => state.form.input);
  const dispatch = useAppDispatch();
  const handleOnChangeInputMessage = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(event.target.value));
  };

  function handleOnSubmitMessage(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(addNewMessage({ content: inputValue }));
    dispatch(changeInput(''));
  }

  return (
    <form className="form" onSubmit={handleOnSubmitMessage}>
      <input
        type="text"
        className="form-input"
        placeholder="Saississez votre message"
        onChange={handleOnChangeInputMessage}
        value={inputValue}
      />
    </form>
  );
}

export default Form;
