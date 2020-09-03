import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component  {

  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      selectedDish:null
    };

  }

  onDishSelect(dishId){
     this.setState({ selectedDish:dishId});
  }

  render() {
    const Homepage=()=>{
      return(
        <Home />
      )
    };
    return (
      
    <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage}></Route>
          <Route path="/menu" component={()=><Menu dishes={this.state.dishes}/>}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
    </div>
  );
    }
}

export default Main;
