import { ReactNode, createContext, useContext, useReducer } from "react";

type ChatGPTAgent = "user" | "system" | "assistant";

interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

type State = {
  messages: ChatGPTMessage[];
  loading: boolean;
};

type Action = { type: "SET_MESSAGES"; payload: ChatGPTMessage[] } | { type: "SET_LOADING"; payload: boolean };

// Define initial state
const initialState: State = {
  messages: [
    {
      role: "assistant",
      content: "Hello, how would you like to be supported today?",
    },
  ],
  loading: false,
};

// Define reducer function
const messagesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

// Create MessagesContext
const MessagesContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  /* tslint:disable:no-empty */
  dispatch: () => {},
});

// Create MessagesProvider component
export const MessagesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(messagesReducer, initialState);

  return <MessagesContext.Provider value={{ state, dispatch }}>{children}</MessagesContext.Provider>;
};

// Custom hook to access the MessagesContext
export const useMessages = () => {
  return useContext(MessagesContext);
};
