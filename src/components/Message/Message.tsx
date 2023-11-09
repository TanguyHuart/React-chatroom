import './Message.scss';

type MessageProps = {
  author: string;
  content: string;
};

function Message({ author, content }: MessageProps) {
  return (
    <div className="message">
      <div className="message-author">{author}</div>
      <p className="message-content"> {content}</p>
    </div>
  );
}

export default Message;
