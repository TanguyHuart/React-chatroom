import { ChangeEvent, FormEvent } from 'react';
import { Send } from 'react-feather';
import './Form.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeInput } from '../../store/reducers/formMessage';
import { addNewMessage } from '../../store/reducers/chat';

function Form() {
  const inputValue = useAppSelector((state) => state.formMessage.input);
  const author = useAppSelector((state) => state.formMessage.author);
  const dispatch = useAppDispatch();

  const handleOnChangeInputMessage = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput(event.target.value));
  };

  const handleOnSubmitMessage = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(
      addNewMessage({
        content: inputValue,
        id: crypto.randomUUID(),
        author,
      })
    );
    dispatch(changeInput(''));
  };

  return (
    <form className="form" onSubmit={handleOnSubmitMessage}>
      <input
        type="textarea"
        className="form-input"
        placeholder="Saississez votre message"
        onChange={handleOnChangeInputMessage}
        value={inputValue}
      />
      <button className="form-button" type="submit" value="Envoyer">
        <Send />
      </button>
    </form>
  );
}

export default Form;
