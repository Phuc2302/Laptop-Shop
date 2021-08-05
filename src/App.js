import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <h1>Lap-top shop</h1>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:productId" exact component={ProductDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;


