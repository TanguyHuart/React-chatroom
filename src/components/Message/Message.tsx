import './Message.scss';

type MessageProps = {
  content: string;
};

function Message({ content }: MessageProps) {
  return (
    <div className="message">
      <div className="message-author">Yst</div>
      <p className="message-content"> {content}</p>
    </div>
  );
}

export default Message;
