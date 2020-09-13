import React, { Component } from 'react';
import {Card,CardImg,CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem,Button, Modal, ModalHeader, ModalBody, Row, Label, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm,Errors, Control } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Commentmodal extends Component{

    constructor(props){
        super(props);

        this.state={
            isModalOpen:false
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen,
        })
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId,values.rating,values.author,values.message)
    }

    render(){
        return(
            <div>
                <RenderComments comm={this.props.comments}></RenderComments>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit comment</span>
                </Button>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
                        <ModalBody>
                            <div className="col-12 col-md-9">
                                <LocalForm onSubmit={this.handleSubmit}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Col md={10}>
                                            <Control.select model=".rating" name="rating" className="form-control" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="author" md={2}>Your name</Label>
                                        <Col md={10}>
                                            <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength:  minLength(3), maxLength: maxLength(15)}} />
                                            <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less'}} />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="feedback" md={2}>Your feedback</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".message" id="message" name="message" rows="6" className="form-control" validators={{ required }} />
                                            <Errors className="text-danger" model=".message" show="touched" messages={{ required: 'Required'}} />
                                        </Col>
                                    </Row>

                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
        );

    };
}


    function RenderComments({comm}){
        const comments=comm.map((comment)=>{
            return(
            <div key={comment.id} className="col-lg-7">
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
            <div >
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
                    <div className="col-md-4 mt-1">
                   <RenderDishItem dish={props.dishes} />     
                    </div>
                    <div className="col-md-8">
                    <Commentmodal  comments={props.comments} addComment={props.addComment} dishId={props.dishes.id} className="col-md-8"></Commentmodal>
                    </div>          
                </div>
                
            
                </div>
                
            );
    }
        
    

export default Dishdetail;