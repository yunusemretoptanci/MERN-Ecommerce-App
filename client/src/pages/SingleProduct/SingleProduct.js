import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SingleProduct.css"
import { publicRequest } from "../../requestMethod";
import Header from "../../components/Header/Header";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {addProduct,updateProduct} from "../../redux/cartRedux";
import {useDispatch, useSelector} from "react-redux";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const SingleProduct=()=>{
    
const location=useLocation();
const id=location.pathname.split("/")[2];
const [product,setProduct]=useState({});
const dispatch=useDispatch();
const [quantity, setQuantity] = useState(1);

const cart=useSelector((state)=>state.cart)

useEffect(()=>{
    const getProduct=async()=>{
        try{
            const res=await publicRequest.get("/products/find/" +id)
            setProduct(res.data);   
        }catch(err){
        }
    }
    getProduct();
},[id]);

const handleClick=()=>{
    console.log(cart.products)
    const carts=cart.products;

    carts.forEach(element => {
        if(element._id==product._id){
            dispatch(updateProduct({...product,quantity}))
        }
    });

    var i=0;
    carts.forEach(element => {
        if(element._id!=product._id){
            i++;
            if(i==carts.length){
                dispatch(addProduct({...product,quantity}));
                i=0;
            }
        }
    });

    if(carts.length==0){
        dispatch(addProduct({...product,quantity}));
    }
    
    NotificationManager.success('Product succsessfully added to cart!',"",1000)
}

    return(
         <>
            <Header></Header>
            <div>

            </div>
            
            <div className="singleProduct">
                <div className="single-img-container">
                    <img src={product.img}></img>
                </div>
                    
                
                <div className="process-container">
                    <h3>{product.title}</h3>
                    <p>{product.desc}</p>
                    <h4>{product.price}$</h4>

                    <div className="color-size">
                    <div className="color-area">
                    <p>Colors: {product.color} </p>
                    
                    </div>
                        
                        <p>Size: {product.size}</p>
                    </div>
                    <NotificationContainer />
                    <div className="buttons">

                    <div className="inc-dec">
                   
                    <RemoveIcon onClick={()=>quantity>1&&setQuantity(quantity-1)} style={{cursor:"pointer"}}></RemoveIcon>
                    <div className="amount-number">
                    <p>{quantity}</p>
                    </div>
                    <AddIcon onClick={()=>setQuantity(quantity+1)} style={{cursor:"pointer"}}></AddIcon>
                    </div>

                    <button onClick={handleClick} className="button">ADD TO CART</button>
                        
                    </div>
                </div>
            </div>
         </>
    )
}

export default SingleProduct;