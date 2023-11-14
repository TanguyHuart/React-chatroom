/* eslint-disable import/prefer-default-export */
import store from '../store';
import { addNewMessage } from '../store/reducers/chat';
import { changeInput } from '../store/reducers/formMessage';
import { socket } from './io';

export const sendMessege = () => {
  // il est possible d'utiliser le store redux directement dans nos fonctions
  // Cela me permet de récupérer toutes les informations de mon store redux sans avoir a m'abonner aux modification
  const state = store.getState();

  const message = {
    author: state.loginForm.pseudo,
    content: state.messageForm.input,
  };
  socket.emit('send_message', message);
  store.dispatch(changeInput(''));
};

export const subscribeToNewMessage = () => {
  //  je m'abonne au nouveau message envoyé par le server
  socket.on('new_message', (message) => {
    //  quand je reçois un nouveau message , je le rajoute dans mon store redux
    store.dispatch(addNewMessage(message));
  });
};

export const unsubscribeToNewMessage = () => {
  //  Je me désabonne des nouveaux messages envoyé par mon server
  socket.off('new_message');
};
