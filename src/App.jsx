import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import { Route, Switch } from 'react-router';
import Carrers from './Carrers';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/service" component={Services} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/carrers" component={Carrers} />
            </Switch>
            <Footer />
        </>
    );
};
export default App;