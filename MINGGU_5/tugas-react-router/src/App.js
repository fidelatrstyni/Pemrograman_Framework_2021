import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
export default function NestingAuth() {
  return(
    
      <Router>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <AuthButton />
          <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link">
            <Link to="/home">Home</Link>
            <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
            <Link to="/barangs">Barang</Link>
            <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link">
            <Link to="/private">Login</Link>
            <span class="sr-only">(current)</span>
        </a>
      </li>
      
    </ul>
        </div>
        </nav>
          <hr/>
          
            <Switch>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/barangs">
                <Barangs />
              </Route>
              <PrivateRoute path="/private">
                <ProtectedPage />
              </PrivateRoute>
            </Switch>
      </Router>

  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (

    <p style={{marginTop:'1000px'}}>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p></p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function ProtectedPage(){
  return <h3>Private</h3>
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || {from : {pathname: "/"}};
  let login = () =>{
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return(
    <div>
      <p>You Must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

function Home() {
  const isLoggedIn = fakeAuth.isAuthenticated;
  if (isLoggedIn == true) {
    return(
      <div>
        <h2>Home</h2>
        <p>You are logged in</p>
      </div>
      );    
  }
    return(
    <div>
      <h2>Home</h2>
      <p>You are not logged in</p>
    </div>
    );  
  ;}

function Barangs() {
  let {path,url} = useRouteMatch();
  return(
    <div>
      <h2>Barang</h2>
      <div class="card card-group" style={{width: '18rem'}}>
          <div class="card">
            <Link to={`${url}/Kemeja, Kaos`}>Baju</Link>
          </div>

          <div class="card">
            <Link to={`${url}/Running, Boots`}>Sepatu</Link>
          </div>

          <div class="card">
            <Link to={`${url}/Swallow, Sandal Gunung`}>Sandal</Link>
          </div>
        </div>

        <Switch>
            <Route exact path="{path}">
              <h3>Please Choose Your Goods!</h3>
            </Route>

            <Route path={`${path}/:barangId`}>
              <Barang/>
            </Route>

        </Switch>

    </div>
  );
}

function Barang() {
  let{barangId} = useParams();

  return(
    <div>
      <h3>{barangId}</h3>
    </div>
  );
}