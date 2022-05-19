import "./book.css";
import image from "../../images/book.png";
import editIcon from "../../images/editIcon.svg"
import removeIcon from "../../images/removeIcon.svg"
import {useDeleteBookByIdMutation} from "../../redux/bookFetcher";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {saveToEdition} from "../../redux/editBookSlice";
import {addBookToCard, decreaseBookAmount, increaseBookAmount, removeBookFromCart} from "../../redux/cartSlice";

export const Book = (book) => {

    const dispatch = useDispatch();

    const [deleteBook] = useDeleteBookByIdMutation();

    const {title, authors, price, amount, year} = book.book;

    const handleDelete = async () => {
        await deleteBook(book.book.id);
    }

    const handleEdition = () => {
        dispatch(saveToEdition(book.book));
    }

    const handleAdd = () => {
        dispatch(addBookToCard({book: book.book}));
    }

    const handleRemove = () => {
        dispatch(removeBookFromCart({book: book.book}));
    }

    const increaseAmount = () => {
        if (book.amount < book.book.amount) {
            dispatch(increaseBookAmount(book.book.id));
        }
    }

    const decreaseAmount = () => {
        if (book.amount > 1) {
            dispatch(decreaseBookAmount(book.book.id));
        }
    }
    return (
        <div className="book">
            <div className="book__header">
                <img src={image}/>
                <div className="book__title">
                   {title}
                </div>
                {book.isInCart ? <div className="book__remove">
                    <img className="remove-icon" src={removeIcon} onClick={handleRemove}/>
                </div>: null}
            </div>
            <div className="book__text">
                <b>Authors:</b> {authors}
            </div>
            <div className="book__text">
                <b>Publishing year:</b> {year.toString().substring(0, 4)}
            </div>
            <div className="book__text">
                <b>Price:</b> {`${price} $`}
            </div>
            <div className="book__text">
                <b>Amount:</b> {amount > 0 ? `${amount} left`: 'out of stock'}
            </div>
            <div className="book__button">
                {!book.isInCart && amount > 0?
                    <button className="addToCartBtn animated-btn" onClick={handleAdd}> Add to cart</button> : null}
                {book.isOwned ? <div className="optionBtns">
                    <button className="deleteBtn" onClick={handleDelete}> Delete</button>
                    <Link to="/edit-books" className="editLink" onClick={handleEdition}>
                        <img className="editIcon" src={editIcon}/>
                    </Link>
                </div> : null}
                {book.isInCart ? <div className="amount__options">
                    <button className="decrease" onClick={decreaseAmount}>-</button>
                    <span className="amount">{book.amount}</span>
                    <button className="increase" onClick={increaseAmount}>+</button>
                </div> : null}
            </div>
        </div>
    );
}