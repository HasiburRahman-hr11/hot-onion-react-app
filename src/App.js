import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Single from './pages/Single/Single';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Checkout from './pages/CheckOut/Checkout';
import OrderComplete from './pages/OrderComplete/OrderComplete';
import PageScroller from './components/PageScroller/PageScroller';
import PrivateRoute from './utils/PrivateRoute';
import useAuth from './hooks/useAuth';
import Loading from './components/Loading/Loading';
import NotFound from './pages/NotFound/NotFound';

const App = () => {

  const { user, loading } = useAuth();

  return (
    <Router>
      {loading && <Loading />}
      <Header />
      <ToastContainer />
      <PageScroller />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/foods/:foodId">
          <Single />
        </Route>
        <PrivateRoute path="/checkout">
          <Checkout />
        </PrivateRoute>
        <PrivateRoute path="/complete">
          <OrderComplete />
        </PrivateRoute>

        <Route path="/signup">
          {!user.email && !user.displayName
            ? (<SignUp />)
            : (<Redirect to="/checkout" />)}
        </Route>
        <Route path="/signin">
          {!user.email && !user.displayName
            ? (<SignIn />)
            : (<Redirect to="/checkout" />)}
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
