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





