import React, {Component} from 'react';
import Menu from "./src/components/menu";
import ReactDOM from 'react-dom';
import CartContext from "./src/context/cart_context";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import cartRoute from "./src/routes/cartRoute";
import catalogRoute from "./src/routes/catalogRoute";
import contactsRoute from "./src/routes/contactsRoute";
import productRoute from "./src/routes/productRoute";
import NotFound from "./src/components/not_found";
import CartInCatalog from "./src/components/cart_in_catalog";

const routes = [cartRoute, catalogRoute, contactsRoute, productRoute];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => {
      return <route.component {...props} routes={route.routes} />
    }}
  />
);

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
              <CartInCatalog />
              <Switch>
                  {routes.map((route, i) =>
                    <RouteWithSubRoutes
                      key={i} {...route}
                    />
                  )}
                  <Route component={NotFound} />
              </Switch>
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