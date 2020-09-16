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
import { addComment, fetchDishes } from '../redux/ActionCreator';
import {actions} from 'react-redux-form';


const mapStateToProps=state=>{
  return{
    dishes:state.dishes,
    leaders:state.leaders,
    promos:state.promos,
    comments:state.comments
  }
}

const mapDispatchToProps=(dispatch)=>({
  addanyComment:(dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes:()=>{dispatch(fetchDishes())},
  resetFeedback:()=>{dispatch(actions.reset('feedback'))}
})



class Main extends Component  {

  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.props.fetchDishes();
  }

  render() {
    const Homepage=()=>{
      if(this.props!=null){
        return(
          <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesError={this.props.dishes.errMess}
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
        <DishDetail dishes={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt( match.params.dishId,10))[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
         comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId))}
         addComment={this.props.addanyComment}></DishDetail>
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
          <Route exact path="/contact" component={()=><Contact resetfeedbackform={this.props.resetFeedback}/>}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
    </div>
  );
    }
}   

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
