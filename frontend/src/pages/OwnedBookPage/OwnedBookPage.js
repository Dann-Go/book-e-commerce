import { useGetAllUserBooksQuery} from "../../redux/bookFetcher";
import {Book} from "../../components/Book/Book";
import "./ownedBookPage.css"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


export const OwnedBookPage = () =>{
    const {isAuth} = useSelector((state) => state.auth);

    const {data, isFetching} = useGetAllUserBooksQuery()

    
    return (
        <div className="ownedBook">
            {!isFetching && data != {}? data.map(book => <Book key={book.id} book={book} isOwned = {true} />) : null}
            <div className="createBook">
                <Link to='/create-books' className = "createBookLink">+</Link>
            </div>
        </div>
    )
}