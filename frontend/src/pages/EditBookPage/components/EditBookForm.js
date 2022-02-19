import {useState} from "react";
import {useUpdateBookByIdMutation} from "../../../redux/bookFetcher";
import "./editBookForm.css";
import {useSelector} from "react-redux";

const EditBookForm = () => {

    const book = useSelector((state) => state.editor.book);
    const {id, title, authors, year, price, amount} = book;
    const [titleState, setTitleState] = useState(title);
    const [authorsState, setAuthorsState] = useState(authors);

    const parseDate = (year) => {
        let check = year.toString();
        check = new Date(Date.parse(check));
        return check.toISOString().split('T')[0];
    }

    const [yearState, setYearState] = useState(parseDate(year));
    const [priceState, setPriceState] = useState(price);
    const [amountState, setAmountState] = useState(amount);

    const [updateBook] = useUpdateBookByIdMutation();

    const handleUpdateBook = async (event) => {
        event.preventDefault();
        const body = {
            title: titleState,
            authors: authorsState,
            year: yearState,
            price: parseFloat(priceState),
            amount: parseInt(amountState),
        }
        await updateBook({
            body: body,
            id: id
        })
    }


    const handleTitleChange = (event) => {
        setTitleState(event.target.value);
    }

    const handleAuthorsChange = (event) => {
        setAuthorsState(event.target.value);
    }

    const handleAmountChange = (event) => {
        setAmountState(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPriceState(event.target.value);
    }

    const handleYearChange = (event) => {
        setYearState(event.target.value);
    }

    return (
        <form className="bookForm" onSubmit={handleUpdateBook}>
            <div className="form__group">
                <label className="form__label">Title</label>
                <input className="form__input" type="text" name="title" placeholder="Title" value={titleState}
                       onChange={handleTitleChange}/>
            </div>
            <div className="form__group">
                <label className="form__label">Authors</label>
                <input className="form__input" type="text" name="Authors" placeholder="Authors" value={authorsState}
                       onChange={handleAuthorsChange}/>
            </div>
            <div className="form__group">
                <label className="form__label">Year of publishing</label>
                <input className="form__input" type="date" name="year" placeholder="Year" value={yearState}
                       onChange={handleYearChange}/>
            </div>
            <div className="form__group">
                <label className="form__label">Price in $</label>
                <input className="form__input" type="number" step="0.5" name="price" placeholder="$"
                       value={priceState}
                       onChange={handlePriceChange}/>
            </div>
            <div className="form__group">
                <label className="form__label">Amount available</label>
                <input className="form__input" type="number" name="amount" placeholder="Amount"
                       value={amountState}
                       onChange={handleAmountChange}/>
            </div>
            <button className="form__button" type="submit">Create</button>
        </form>
    )


}
export default EditBookForm;