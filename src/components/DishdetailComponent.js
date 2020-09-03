import React from 'react';
import {Card,CardImg,CardTitle, CardBody, CardText} from 'reactstrap';


    function RenderComments({comm}){
        const comments=comm.map((comment)=>{
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

    function RenderDishItem({dish}){
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

    const Dishdetail=(props)=>
    {
        const dish=props.dish;

        if(dish!=null){
            return(
                <div className="container">
                    
                <div className="row">
                    <div className="col-md-5 mt-1">
                   <RenderDishItem dish={dish} />     
                    </div>
                    <RenderComments comm={dish.comments}></RenderComments>
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
        
    

export default Dishdetail;