import React from 'react'
import axios from 'axios'

// {
//     "title" : "Football",
//     "sort-des":"We play football",
//     "price":"$ 10",
//     "img":"https://www.bing.com/images/search?view=detailV2&ccid=haugqw68&id=AA8BBA06DEDC4690D5AB06222FD03A063978DF9F&thid=OIP.haugqw68uDXRFwZoOURodAHaH7&mediaurl=https%3A%2F%2Fcdn.britannica.com%2F68%2F195168-050-BBAE019A%2Ffootball.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.85aba0ab0ebcb835d117066839446874%3Frik%3Dn994OQY60C8iBg%26pid%3DImgRaw%26r%3D0&exph=1600&expw=1495&q=Football+Soccer+Ball&simid=608037760906386431&FORM=IRPRST&ck=F8F17E54D6D48B4E8207C292C48F0F31&selectedIndex=0&itb=0&cw=1103&ch=553&ajaxhist=0&ajaxserp=0",
// }


// cart e add korar jonno
const handleAddCart = ( product ) => {

    if(!product) console.log("Product not found");

    //console.log("Add to cart")
    axios.post("http://localhost:3000/cart", product)
    .then(res => {
        console.log("Added to cart:", res.data);
        alert("Product added to cart successfully!");
    })
    .catch(err => {
        console.log("Error:", err);
        alert("Product added to cart failed!");
    })
}

const Product = ({product}) => {
  return (
    <div>
        <div className="card my-4" style={{width: "18rem"}}>
            <img src={product.img} className="card-img-top"  />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.sort_des}</p>
                <p className="card-text">{product.price} tk</p>
                <button onClick={() => handleAddCart(product) } className="btn btn-primary">Add cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product