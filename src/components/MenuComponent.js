import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

function RenderDishItem({dish,onClick}){
    return(
        <Card onClick={()=>onClick(dish.id)}>
            <CardImg width="100" src={dish.image}></CardImg>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
}
        
        const Menu=(props)=>{
            const menu=props.dishes.map((dish)=>{
                return(
                    <div key={dish.id} className="col-12 col-md-5 mt-1">
                        <RenderDishItem dish={dish} onClick={props.onClick} />
                    </div>
                );
            });

            return(
                <div className="container">
                    <div className="row">
                            {menu}
                    </div>
                </div>
                );
            }

export default Menu;