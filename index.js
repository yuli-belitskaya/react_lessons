import React, {Component} from 'react';
import Catalog from "./src/components/catalog";
import Menu from "./src/components/menu";
import Cart from "./src/components/cart";
import ReactDOM from 'react-dom';
import CartContext from "./src/context/cart_context";
import Contacts from "./src/contacts/contacts";
import ProductContext from "./src/context/product_context";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { mainPath, catalogPath, contactsPath, productPath } from './src/routes/routes';
import cartRoute from "./src/routes/cartRoute";
import catalogRoute from "./src/routes/catalogRoute";
import contactsRoute from "./src/routes/contactsRoute";
import productRoute from "./src/routes/productRoute";

const routes = [cartRoute, catalogRoute, contactsRoute, productRoute];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => {
      return <route.component {...props} />
    }}
  />
);
//
// const App = () => {
//   <Router>
//     <div>
//       <Switch>
//
//       </Switch>
//     </div>
//   </Router>
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cart: [] };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    const cart = [...this.state.cart];

    const idx = cart.find((item) => {
      return product.id === item.id;
    });

    if (idx == null) {
      cart.push(product);
    }
    this.setState({cart});
  }

  render() {
    return (
      <Router>
        <Switch>
          <Menu>
            <CartContext.Provider value={{
              cart: this.state.cart,
              addToCart: this.addToCart,
            }}>
              {routes.map((route, i) =>
                <RouteWithSubRoutes
                  key={i} {...route}
                />
              )}
            </CartContext.Provider>
          </Menu>


         </Switch>
       </Router>
     );
   }
 }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);