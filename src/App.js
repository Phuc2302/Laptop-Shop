import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Buy from './components/Buy';
import Cart from './components/cart/Cart';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import { store } from './store';

function App() {

  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123"
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in successful");
      setUser({
        name: details.name,
        email: details.email
      });
    }


    else {
      console.log("Login unseccessful");
      setError("Login unseccessful");
    }
  }



  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:productId" exact component={ProductDetail} />
            <Route path="/cart" component={Cart} />
            <Route path="/buy" component={Buy} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;





