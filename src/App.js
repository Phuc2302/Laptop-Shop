// import { Provider } from 'react-redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
// import ProductDetail from './components/ProductDetail';
// import ProductList from './components/ProductList';
// import { store } from './store';
// import Navbar from './components/Navbar';
// import Search from './components/Search';
// import Home from './components/Home';
// import Cart from './components/cart/Cart';
// function App() {
  
//   return (
//     <Provider store={store}>
//       <div className="app">
//         <BrowserRouter>
//           <h1>Lap-top shop</h1>
//           <Navbar/>
//           {/* <Search onSearch={onSearch}/> */}
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/product/:productId" exact component={ProductDetail} />
//             <Route path='/carts' exact component={Cart}/>
//           </Switch>
//         </BrowserRouter>
//       </div>
//     </Provider>
//   );
// }

// export default App;


import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import { store } from './store';
import Footer from './components/Footer/Footer'; 

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
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;





