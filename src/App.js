import React from 'react'
import './app.css' 
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/loginForm'
import {ChatEngine} from 'react-chat-engine'

const App= ()=>{

  if(!localStorage.getItem('username')){
    return <LoginForm />
  }

  return ( 
    <ChatEngine 
      height='100vh'
      projectID='f28adb50-6228-4ab7-9280-f19e2b22df4c'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} /> }

    />
  );
}


export default App;