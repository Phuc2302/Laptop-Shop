import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import { store } from './store';
import Navbar from './components/Navbar';
import Search from './components/Search';
function App() {
  
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <h1>Lap-top shop</h1>
          <Navbar/>
          {/* <Search onSearch={onSearch}/> */}
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


