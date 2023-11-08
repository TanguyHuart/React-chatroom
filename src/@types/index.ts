export type Message = {
  content: string;
};

export interface ChatState {
  messages: Message[];
}

export interface FormState {
  input: string;
}
