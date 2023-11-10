export type TMessage = {
  id: string;
  author: string;
  content: string;
};

export interface ChatState {
  messages: TMessage[];
}

export interface MessageFormState {
  author: string;
  input: string;
}

export interface LoginFormState {
  loginFormIsVisible: boolean;
  emailInput: string;
  passwordInput: string;
}
