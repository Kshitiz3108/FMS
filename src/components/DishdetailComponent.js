import React from 'react';
import {Card,CardImg,CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderComments({comm}){
        const comments=comm.map((comment)=>{
            return(
            <div key={comment.id}>
                    <p className="text-left">{comment.comment}</p>
                    <p>
                    -- {comment.author} ,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
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

            return(
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dishes.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dishes.name}</h3>
                        <hr />
                    </div>                
                </div> 
                <div className="row">
                    <div className="col-md-5 mt-1">
                   <RenderDishItem dish={props.dishes} />     
                    </div>
                    <RenderComments comm={props.comments}></RenderComments>
                </div>
                </div>
                
            );
    }
        
    

export default Dishdetail;