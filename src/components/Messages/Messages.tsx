import Message from '../Message/Message';
import { useAppSelector } from '../../hooks/redux';
import './Messages.scss';

function Messages() {
  const messages = useAppSelector((state) => state.chat.messages);

  return (
    <div className="messages__container">
      {messages.map((message) => (
        <Message key={message.content} content={message.content} />
      ))}
    </div>
  );
}

export default Messages;
