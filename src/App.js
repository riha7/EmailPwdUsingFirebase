import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import FallbkError from './Login authenticatn firebase/FallbkError';
import { auth } from './Login authenticatn firebase/firebase';
import HomePage from './Login authenticatn firebase/HomePage';
import LoginPage from './Login authenticatn firebase/LoginPage';

function App() {
const [presentUser, setpresentUser] = useState(null)
useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if (user) {
        setpresentUser({
          uid:user?.uid,
          email:user?.email
        })        
      } else {
        setpresentUser(null)
      }

    })
}, [])
const ErrorHandler=(error,errorInfo)=>{
    console.log('Logging Error',error,errorInfo)
}
  return (
    <div className="App">
      <header className="App-header">
        {presentUser ? <HomePage presentUser={presentUser} />:
        <ErrorBoundary FallbackComponent={FallbkError} onError={ErrorHandler}>
        <LoginPage />
        </ErrorBoundary> }
        
        
      </header>
    </div>
  );
}

export default App;
