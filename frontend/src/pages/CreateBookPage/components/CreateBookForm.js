import {useState} from "react";
import {useCreateBookMutation} from "../../../redux/bookFetcher";
import "./createBookForm.css";

const CreateBookForm = () => {

    const [titleState, setTitleState] = useState();
    const [authorsState, setAuthorsState] = useState([]);
    const [yearState, setYearState] = useState();
    const [priceState, setPriceState] = useState();
    const [amountState, setAmountState] = useState();

    const [createBook] = useCreateBookMutation();

    const handleCreateBook = async (event) => {
        event.preventDefault();
        const body = {
            title: titleState,
            authors: [authorsState],
            year: yearState,
            price: parseFloat(priceState),
            amount : parseInt(amountState),
        }
        await createBook(body)
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
        <form className="bookForm" onSubmit={handleCreateBook}>
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
                <input className="form__input" type="number" step ="0.5" name="price" placeholder="$"
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
export default CreateBookForm;