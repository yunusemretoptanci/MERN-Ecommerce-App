import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SingleProduct.css"
import { publicRequest } from "../../requestMethod";
import Header from "../../components/Header/Header";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {addProduct} from "../../redux/cartRedux";
import {useDispatch} from "react-redux";


const SingleProduct=()=>{
    
const location=useLocation();
const id=location.pathname.split("/")[2];
const [product,setProduct]=useState({});
const dispatch=useDispatch();
const [quantity, setQuantity] = useState(1);

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
    dispatch(addProduct({...product,quantity}));
}

    return(
         <>
            <Header></Header>
            <div className="singleProduct">
                
                    <img src={product.img}></img>
                
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