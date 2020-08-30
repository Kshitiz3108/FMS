import React, { Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle, CardBody, CardText} from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        }
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
        console.log(this.state.selectedDish);
    }

    renderDish(dish){
        if(dish !=null){
            return(
                
            <Card>
            <CardImg top src={dish.image}></CardImg>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }


    render(){
        
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        <CardImg width="100" src={dish.image}></CardImg>
                        <CardImgOverlay>
                             <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(

            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;