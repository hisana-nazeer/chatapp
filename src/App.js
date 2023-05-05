
import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="page-container">
    <div className="app-wrapper">
  
  {user ? <Chat /> : <SignIn />}

  </div>
  </div>
    )
}

export default App;
