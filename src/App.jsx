import React from 'react';
import { Switch ,Route } from 'react-router';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';



const App=()=>{
    return(
        <>
       
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        </Switch>
        
        </>
    );
};
export default App;