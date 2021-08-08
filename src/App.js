import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import Search from './components/Search';
import { store } from './store';
function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          {/* <Search onSearch={onSearch} /> */}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:productId" exact component={ProductDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;