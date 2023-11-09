import { useEffect, useRef } from 'react';
import Message from '../Message/Message';

import { useAppSelector } from '../../hooks/redux';
import './Messages.scss';

function Messages() {
  // Je créer une nouvelle ref, je précise avec TypeScript qu'elle contiendra un element HTMLDivElement
  // On doit l'initialiser à null
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messages = useAppSelector((state) => state.chat.messages);
  useEffect(() => {
    // scrollIntoView pêrmet de scroller jusqu'a un élément
    // comme mon element est e bas de ma liste de message. je scroll en bas de la miste de message.
    // J'utilise l'élément stocker dans ma ref pour scroller jusqu'à lui
    // Le `?` est mis avis d'éviter les erreurs si mon élément HTML n'est pas trouvé
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="messages__container">
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
      {/* Je précise que ma div ici sera liée à la ref messagesEndRef */}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Messages;
