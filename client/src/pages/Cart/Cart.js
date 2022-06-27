import Header from "../../components/Header/Header";
import "./Cart.css";
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/cartRedux";

const Cart=()=>{
    const cart=useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    const handleDelete = (id, price, quantity) => {
        dispatch(deleteProduct({ id, price, quantity }));
      };

    return(
        <div className="real-cart">
        <Header></Header>

        <h3 className="bag-header">YOUR BAG</h3>

        <div className="cart-section">

        <div className="cart-items">
        {cart.products.map(product=>(
            <div className="carts">
                <img src={product.img}></img>
                <div className="product-details">
                    <div className="product-attr">
                        <p>Product: {product.title}</p>
                        <p>ID: {product._id}</p>

                        <div className="cart-color-area">
                        <p>Color:</p>
                        <div style={{width:"20px",height:"20px",backgroundColor:`{product.color}`,borderRadius:"15px",border:"1px solid black"}}> </div>
                        </div>
                       
                        <p>Size: {product.size}</p>
                    </div>
                    <div className="cart-special">
                    <ClearIcon onClick={() => handleDelete(product._id, product.price, product.quantity)} style={{color:"darkred",cursor:"pointer"}}></ClearIcon>
                    <p>Amount: {product.quantity} </p>
                    <p>Price: {product.price}$</p>
                    </div>
                </div>
            </div>
        ))}
        </div>

        <div className="summary">
            <h3>ORDER SUMMARY</h3>

            <div className="subtotal">
                <p>Subtotal</p>
                <p>{cart.total}$</p>
            </div>
            <div className="shipping">
                <p>Estimated Shipping</p>
                <p>15$</p>
            </div>
            <div className="shipping-disc">
                <p>Shipping Discount</p>
                <p>-15$</p>
            </div>
            <div className="total">
                <p>Total</p>
                <p>{cart.total}$</p>
            </div>

            <button>CHECKOUT NOW</button>
        </div>
        </div>
        </div>
    )
}

export default Cart;