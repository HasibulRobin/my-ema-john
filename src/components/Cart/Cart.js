import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * .10;
    const grandTotal = tax + shipping + total;
    return (
        <div>
            <h1>Order Summary</h1>
            <h3>ordered items :{totalQuantity}</h3>
            <p>Total : {total.toFixed(2)}</p>
            <p>shipping :{shipping.toFixed(2)}</p>
            <p>tax : {tax.toFixed(2)}</p>
            <p>GrandTotal : {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;