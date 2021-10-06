import './App.css';
import initializeAuthentication from './FireBase/FireBase.initialize';
import { GoogleAuthProvider,signInWithPopup,GithubAuthProvider,signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from 'react';

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const auth = getAuth();


function App() {
  const [user,setUser] = useState({})
  const gogleAuth = () => {
    signInWithPopup(auth,googleProvider)
    .then(res => {
      const {displayName,email,photoURL} = res.user
      const newUser = {
        name : displayName,
        mail : email,
        img : photoURL
      }
      setUser(newUser)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const gitAuth = () => {
    signInWithPopup(auth,gitProvider)
    .then(res => {
      const {displayName,email,photoURL} = res.user
      const newUser = {
        name : displayName,
        mail : email,
        img : photoURL
      }
      setUser(newUser)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const signOutBtn = () => {
    signOut(auth)
    .then(()=>{
      setUser({})
    })
  }

  const btnDesign = {
    background : 'black',
    padding : '10px',
    color : 'white',
    margin : '0 5px'
  }
  return (
    <div className="App">
      <h1>Welcome to firebase authentication system</h1>
      <h3>{user.name}</h3>
      <h3>{user.mail}</h3>
      <img src={user.img} alt="" />
      <br />
      {
        !user.name ? <div>
          <button style={btnDesign} onClick={gogleAuth}>Google authentication</button>
          <button style={btnDesign} onClick={gitAuth}>Google authentication</button>
        </div> : <button style={btnDesign} onClick={signOutBtn}>Sign Out</button>
      }
    </div>
  );
}

export default App;
