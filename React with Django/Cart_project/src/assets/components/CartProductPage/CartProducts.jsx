import React from 'react'
import CartProduct from './CartProduct'
import { useState, useEffect } from 'react'



// data aikhan theke niyeo kaj kora jai
// best practice holo data ke alada file a rakha
// json file a data rakha

// const data = [
//     {
//         "title" : "Football",
//         "sort_des":"We play football",
//         "price":"$ 10",
//         "img":"/image/Cricket-Bat.jpeg",
//     },
//     {
//         "title" : "Cricket",
//         "sort_des":"We play cricket",
//         "price":"$ 20",
//         "img":"/image/Cricket-Bat.jpeg",
//     },{
//         "title" : "Football",
//         "sort_des":"We play football",
//         "price":"$ 10",
//         "img":"/image/Cricket-Bat.jpeg",
//     },
//     {
//         "title" : "Cricket",
//         "sort_des":"We play cricket",
//         "price":"$ 20",
//         "img":"/image/Cricket-Bat.jpeg",
//     },{
//         "title" : "Football",
//         "sort_des":"We play football",
//         "price":"$ 10",
//         "img":"/image/Cricket-Bat.jpeg",
//     },
//     {
//         "title" : "Cricket",
//         "sort_des":"We play cricket",
//         "price":"$ 20",
//         "img":"/image/Cricket-Bat.jpeg",
//     },{
//         "title" : "Football",
//         "sort_des":"We play football",
//         "price":"$ 10",
//         "img":"/image/Cricket-Bat.jpeg",
//     },
//     {
//         "title" : "Cricket",
//         "sort_des":"We play cricket",
//         "price":"$ 20",
//         "img":"/image/Cricket-Bat.jpeg",
//     },{
//         "title" : "Football",
//         "sort_des":"We play football",
//         "price":"$ 10",
//         "img":"/image/Cricket-Bat.jpeg",
//     },
//     {
//         "title" : "Cricket",
//         "sort_des":"We play cricket",
//         "price":"$ 20",
//         "img":"/image/Cricket-Bat.jpeg",
//     },{
//         "title" : "Football",
//         "sort_des":"We play football",
//         "price":"$ 10",
//         "img":"/image/Cricket-Bat.jpeg",
//     },
//     {
//         "title" : "Cricket",
//         "sort_des":"We play cricket",
//         "price":"$ 20",
//         "img":"/image/Cricket-Bat.jpeg",
//     },
// ]



// {
//     "title" : "Football",
//     "sort_des":"We play football",
//     "price":"$ 10",
//     "img":"/image/Cricket-Bat.jpeg",
// }

const CartProducts = () => {

    // json file theke data load kora
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/doc/ProductData.json')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])

    // load kora sesh use korsi CartProduct component a

  return (
    <div>
        <h1>Products -:</h1>
        <div className="container">
            <div className="row">
                {
                    data.map((product) => {
                        return (
                            <div className="col-md-4">
                                <CartProduct product={product} key={product.id}/>
                            </div>
                        )
                })}
                
            </div>
        </div>

    </div>
    
  )
}

export default CartProducts