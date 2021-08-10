import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:productId" exact component={ProductDetail} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;


