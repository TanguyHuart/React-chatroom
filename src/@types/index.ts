export type TMessage = {
  id: string;
  author: string;
  content: string;
};

export interface ChatState {
  messages: TMessage[];
}

export interface FormState {
  author: string;
  input: string;
}
