import {useSelector} from "react-redux";
import {Book} from "../../components/book/Book";
import './cartPage.css'
import {useMakeOrderMutation} from "../../redux/orderApi";

const CartPage = () => {


    const items = useSelector((state) => Object.values(state.cart));
    const totalPrice = items.reduce((total, item) => {
        return total += item.book.price * item.amount;
    }, 0)

    const [makeOrder] = useMakeOrderMutation();

    const handleOrder = async () => {
        const booksIds = items.map(book => book.book.id)
        console.log(booksIds)
        await makeOrder({
            totalPrice: totalPrice,
            items: booksIds,
            status: "COMPLETED"
        })
    }

    return (
        <div className="cart__page">
            <div className="book__container">
                {items ? items.map(book => <Book key={book.book.id} book={book.book} amount={book.amount}
                                                 isInCart={true}/>) : null}
            </div>
            <div className="total__price">
                Total price: {totalPrice}$
            </div>
            {items.length !== 0 ? <button className="make__order__btn" onClick={handleOrder}>Order</button> : null}
        </div>
    )
}

export default CartPage;