import "./App.css";
import { ChatEngine } from "react-chat-engine";
import {ChatFeed} from './components/ChatFeed';
import { LoginForm } from "./components/LoginForm";

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="ce794286-38c6-412a-8bea-1d0d48e80258"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
