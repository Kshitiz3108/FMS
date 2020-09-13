import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    leaders:state.leaders,
    promos:state.promos,
    comments:state.comments
  }
}

class Main extends Component  {

  constructor(props){
    super(props);
  }

  render() {
    const Homepage=()=>{
      if(this.props!=null){
        return(
          <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
                leader={this.props.leaders.filter((leader)=>leader.featured)[0]} 
                promo={this.props.promos.filter((promo)=>promo.featured)[0]}/>
        );
      }
      else{
        return(
          <div></div>
        )
      }
    }

    const DishwithId=({match})=>{
      return(
        <DishDetail dishes={this.props.dishes.filter((dish)=>dish.id===parseInt( match.params.dishId,10))[0]}
         comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}></DishDetail>
      );
    }

    return (
      
    <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage}></Route>
          <Route path="/about" component={()=><About leaders={this.props.leaders}></About>}></Route>
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}></Route>
          <Route path="/menu/:dishId" component={DishwithId}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
    </div>
  );
    }
}   

export default withRouter(connect(mapStateToProps)(Main));
