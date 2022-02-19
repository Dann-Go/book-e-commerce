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
        console.log(book.amount)
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
            <div className="book__remove">
                <img className="remove-icon" src={removeIcon} onClick={handleRemove}/>
            </div>
            <div className="book__header">
                <div className="book__title">
                    Title: {title}
                </div>
                <img src={image}/>
            </div>
            <div className="book__authors">
                Authors: {authors}
            </div>
            <div className="book__year">
                Publishing year: {year.toString().substring(0, 4)}
            </div>
            <div className="book__price">
                Price: {`${price} $`}
            </div>
            <div className="book__amount">
                Amount: {`${amount} left`}
            </div>
            <div className="book__button">
                {!book.isInCart ?
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