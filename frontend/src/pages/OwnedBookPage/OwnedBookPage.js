import { useGetAllUserBooksQuery} from "../../redux/bookFetcher";
import {Book} from "../../components/book/Book";
import "./ownedBookPage.css"
import {Link} from "react-router-dom";


export const OwnedBookPage = () =>{
    const {data, isFetching} = useGetAllUserBooksQuery()

    const handleClick = () => {
        //TODO
        //Set book state as slice with redux tool kit
      console.log("Hello")
    }
    
    return (
        <div className="ownedBook">
            {!isFetching && data != {}? data.map(book => <Book key={book.id} book={book} isOwned = {true} />) : null}
            <div className="createBook">
                <Link to='/create-books' className = "createBookLink" onClick={handleClick}>+</Link>
            </div>
        </div>
    )
}