import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes.js";
import Header from "./Header.js";
import "./style.css";
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return(
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn}}>
      is Logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />

          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  )
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
