import "./book.css";
import image from "../../images/book.png";
import {useDeleteBookByIdMutation} from "../../redux/bookFetcher";

export const Book = (book) => {

    const {title, authors, price, amount, year} = book.book;

    const [deleteBook] = useDeleteBookByIdMutation();

    console.log(deleteBook);

    const handleDelete = async () => {
        await deleteBook(book.book.id);
    }


    return (
        <div className="book">
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
                Publishing year:  {year.toString().substring(0,4)}
            </div>
            <div className="book__price">
                Price:  {`${price} $`}
            </div>
            <div className="book__amount">
                Amount: {`${amount} left`}
            </div>
            <div className="book__button">
                <button className="addToCartBtn animated-btn" > Add to cart</button>
                { book.isOwned ? <button className="deleteBtn" onClick={handleDelete}> Delete</button> : null}
                { book.isOwned ? <button className="editBtn" > Edit</button> : null}
            </div>
        </div>
    )
}