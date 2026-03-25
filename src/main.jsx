import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext'
import { ChatContext } from './Context/Chatcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextprovider>
      <App />
      </ChatContextprovider>
    </AuthContextProvider>
  </React.StrictMode>
)
