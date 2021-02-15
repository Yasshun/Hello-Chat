import React from 'react';
import { BrowserRouter,Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import ChatRoomScreen from './components/ChatRoomScreen';
import ChatsListScreen from './components/ChatsListScreen';


function App() {
  const redirectToChats = () => <Redirect to="/chats" />

  return (
    <BrowserRouter>
      <Switch>
        <Route exact 
        path="/chats" 
        component={ChatsListScreen} />
        <Route exact
        path="/chats/:chatId"
        component={({ match }: RouteComponentProps<{ chatId: string }>) => (
          <ChatRoomScreen chatId={match.params.chatId} />
        )}
      />
      </Switch>
        <Route exact path="/" render={redirectToChats} />
       <ChatsListScreen />
    </BrowserRouter>
  );
}

export default App;
