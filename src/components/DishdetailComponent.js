import React, { Component } from 'react';
import {Card,CardImg,CardTitle, CardBody, CardText} from 'reactstrap';

class Dishdetail extends Component{

    renderComments(){
        const comments=this.props.dish.comments.map((comment)=>{
            return(
            <div key={comment.id}>
                    <p className="text-left">{comment.comment}</p>
                    <p className="text-left">-- {comment.author},{comment.date}</p>
            </div>
            )
        });
        return(
            <div className="col-md-5 ">
                <h3>Comments</h3>
                {comments}
            </div>
        ) ; 
    }

    render(){

        const di=this.props.dish;

        if(di!=null){
            return(
                <div className="container">
                    
                <div className="row">
                    <div className="col-md-5 mt-1">
                        <Card>
                            <CardImg top src={di.image}></CardImg>
                            <CardBody>
                                <CardTitle>{di.name}</CardTitle>
                                <CardText>{di.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments()}
                </div>
                </div>
                
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }
}

export default Dishdetail;