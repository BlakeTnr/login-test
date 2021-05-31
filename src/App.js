import {Button,TextField,createMuiTheme,ThemeProvider,CssBaseline} from "@material-ui/core"
import React from "react";
import firebase from "firebase/app";
import "firebase/auth"

function App() {
  const emailInput = React.createRef()
  const passwordInput = React.createRef()

  const firebaseConfig = {
    apiKey: "AIzaSyCPA0RTcpqqbP5fGRxNFM4qijUEzpvWhrw",
    authDomain: "todolist-a9da8.firebaseapp.com",
    projectId: "todolist-a9da8",
    storageBucket: "todolist-a9da8.appspot.com",
    messagingSenderId: "1062884920911",
    appId: "1:1062884920911:web:5bdb903e6ec2ee1bd2a43a",
    measurementId: "G-9T1X7W0FTD"
  };
  firebase.initializeApp(firebaseConfig)

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  function login() {
    const email = emailInput.current.value
    const password = passwordInput.current.value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user
      console.log("Logged In")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage)
    })
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    <form onSubmit={login}>
      <TextField inputRef={emailInput} id="outlined-basic" label="Username" variant="outlined" />
      <TextField inputRef={passwordInput} id="outlined-basic" label="Password" type="password" variant="outlined" />
      <Button onClick={login} variant="contained" color="primary">Login</Button>
    </form>
    </ThemeProvider>
  );
}

export default App;