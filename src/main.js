import React from "react";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
// import Cards from "./components/card/cards";
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main className="py-5">
	<Container>
		<Switch>
	        <Route exact path='/' component={Home}/>
	        <Route path='/contact' component={Contact}/>
      	</Switch>
	</Container>
  </main>  
);

export default Main;