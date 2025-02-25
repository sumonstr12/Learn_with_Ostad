

import React from 'react'
import Product from './Product'

const data = [
    {
        "title" : "Football",
        "sort_des":"We play football",
        "price":"$ 10",
        "img":"/image/Cricket-Bat.jpeg",
    },
    {
        "title" : "Cricket",
        "sort_des":"We play cricket",
        "price":"$ 20",
        "img":"/image/Cricket-Bat.jpeg",
    },{
        "title" : "Football",
        "sort_des":"We play football",
        "price":"$ 10",
        "img":"/image/Cricket-Bat.jpeg",
    },
    {
        "title" : "Cricket",
        "sort_des":"We play cricket",
        "price":"$ 20",
        "img":"/image/Cricket-Bat.jpeg",
    },{
        "title" : "Football",
        "sort_des":"We play football",
        "price":"$ 10",
        "img":"/image/Cricket-Bat.jpeg",
    },
    {
        "title" : "Cricket",
        "sort_des":"We play cricket",
        "price":"$ 20",
        "img":"/image/Cricket-Bat.jpeg",
    },{
        "title" : "Football",
        "sort_des":"We play football",
        "price":"$ 10",
        "img":"/image/Cricket-Bat.jpeg",
    },
    {
        "title" : "Cricket",
        "sort_des":"We play cricket",
        "price":"$ 20",
        "img":"/image/Cricket-Bat.jpeg",
    },{
        "title" : "Football",
        "sort_des":"We play football",
        "price":"$ 10",
        "img":"/image/Cricket-Bat.jpeg",
    },
    {
        "title" : "Cricket",
        "sort_des":"We play cricket",
        "price":"$ 20",
        "img":"/image/Cricket-Bat.jpeg",
    },{
        "title" : "Football",
        "sort_des":"We play football",
        "price":"$ 10",
        "img":"/image/Cricket-Bat.jpeg",
    },
    {
        "title" : "Cricket",
        "sort_des":"We play cricket",
        "price":"$ 20",
        "img":"/image/Cricket-Bat.jpeg",
    },
]

// {
//     "title" : "Football",
//     "sort_des":"We play football",
//     "price":"$ 10",
//     "img":"/image/Cricket-Bat.jpeg",
// }

const Products = () => {
  return (
    <div>
        <h1>Products -:</h1>
        <div className="container">
            <div className="row">
                {
                    data.map((product, index) => {
                        return (
                            <div className="col-md-4">
                                <Product product={product} key={index}/>
                            </div>
                        )
                })}
                
            </div>
        </div>

    </div>
    
  )
}

export default Products