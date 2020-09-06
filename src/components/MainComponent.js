import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component  {

  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      leaders:LEADERS,
      promos:PROMOTIONS,
      comments:COMMENTS
    };

  }

  render() {
    const Homepage=()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
              leader={this.state.leaders.filter((leader)=>leader.featured)[0]} 
              promo={this.state.promos.filter((promo)=>promo.featured)[0]}/>
      );
    }

    const DishwithId=({match})=>{
      console.log(this.state.dishes.filter((dish)=>dish.id===parseInt( match.params.dishId,10))[0])
      return(
        <DishDetail dishes={this.state.dishes.filter((dish)=>dish.id===parseInt( match.params.dishId,10))[0]}
         comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}></DishDetail>
      );
    }

    return (
      
    <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage}></Route>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}></Route>
          <Route path="/menu/:dishId" component={DishwithId}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
    </div>
  );
    }
}

export default Main;
