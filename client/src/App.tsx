import React from 'react';
import { BrowserRouter,Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import ChatRoomScreen from './components/ChatRoomScreen';
import ChatsListScreen from './components/ChatsListScreen';
import AnimatedSwitch from './components/AnimatedSwitch';




const App: React.FC = () => {
  const redirectToChats = () => <Redirect to="/chats" />

  return (
    <BrowserRouter>
      <AnimatedSwitch>
        <Route 
          exact 
          path="/chats" 
          component={ChatsListScreen} />
        <Route 
          exact
          path="/chats/:chatId"
          component={({ match }: RouteComponentProps<{ chatId: string }>) => (
            <ChatRoomScreen chatId={match.params.chatId} />
            )}
        />
        <Route exact path="/" render={redirectToChats} />
      </AnimatedSwitch>
    </BrowserRouter>
  );
}

export default App;
