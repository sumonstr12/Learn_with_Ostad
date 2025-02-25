import React from 'react'

const CartProduct = ({product}) => {
    return (
        <div>
            <div className="card my-4" style={{width: "18rem"}}>
                <img src={product.img} className="card-img-top"  />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.sort_des}</p>
                    <p className="card-text">{product.price} tk</p>
                    <a href="#" className="btn btn-danger">Remove to Card</a>
                </div>
            </div>
            
        </div>
        
        
    )
}

export default CartProduct