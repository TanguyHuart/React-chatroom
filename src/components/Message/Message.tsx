import clsx from 'clsx';
import { useAppSelector } from '../../hooks/redux';
import './Message.scss';
import { selectIsMine } from '../../store/reducers/chat';

type MessageProps = {
  author: string;
  content: string;
};

function Message({ author, content }: MessageProps) {
  const isMine = useAppSelector(selectIsMine(author));

  return (
    <div
      className={clsx('message', {
        'message--me': isMine,
      })}
    >
      <div className="message-author">{author}</div>
      <p className="message-content"> {content}</p>
    </div>
  );
}

export default Message;
