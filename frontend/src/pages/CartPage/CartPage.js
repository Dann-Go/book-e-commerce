import {useDispatch, useSelector} from "react-redux";
import {Book} from "../../components/Book/Book";
import './cartPage.css'
import {useMakeOrderMutation} from "../../redux/orderApi";
import {useUpdateBookByIdMutation} from "../../redux/bookFetcher";
import {removeBookFromCart} from "../../redux/cartSlice";

const CartPage = () => {

    const dispatch = useDispatch();
    const items = useSelector((state) => Object.values(state.cart));
    const totalPrice = items.reduce((total, item) => {
        return total += item.book.price * item.amount;
    }, 0)

    const [makeOrder] = useMakeOrderMutation();

    const [updateBook] = useUpdateBookByIdMutation();

    const handleOrder = () => {
        const booksIds = items.map(book => book.book.id);
        makeOrder({
            totalPrice: totalPrice,
            items: booksIds,
            status: "COMPLETED"
        });
        items.forEach(item => {
            const body = {
                title: item.book.title,
                authors: item.book.authors,
                price: item.book.price,
                year: parseDate(item.book.year),
                amount: item.book.amount - item.amount
            }
            updateBook({
                body: body,
                id: item.book.id
            });
            dispatch(removeBookFromCart({book: item.book}));
        });
    }

    const parseDate = (year) => {
        let check = year.toString();
        check = new Date(Date.parse(check));
        return check.toISOString().split('T')[0];
    }
    return (
        <div className="cart__page">
            <div className="book__container">
                {items ? items.map(book => <Book key={book.book.id} book={book.book} amount={book.amount}
                                                 isInCart={true}/>) : null}
            </div>
            <div className='order-container'>
                <div className="total-price">
                    <b>Total price:</b> {totalPrice}$
                </div>
                {items.length !== 0 ? <button className="make-order-btn" onClick={handleOrder}>Order</button> : null}
            </div>
        </div>
    )
}

export default CartPage;