import "./book.css"
import image from "../../images/book.png"

export const Book = (book) => {

    const {title, authors, price, amount} = book.book

    console.log(title, authors, price, amount)
    return (
        <div className="book">
            <div className="book__header">
                <div className="book__title">
                    {title}
                </div>
               <img src={image}/>
            </div>
            <div className="book__authors">
                {authors}
            </div>
            <div className="book__price">
                {`${price} $`}
            </div>
            <div className="book__amount">
                {`${amount} left`}
            </div>
            <div className="book__button">
                <button className="addToCartBtn animated-btn" > Add to cart</button>
            </div>
        </div>
    )
}