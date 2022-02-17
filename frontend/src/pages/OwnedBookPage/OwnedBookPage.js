import { useGetAllUserBooksQuery} from "../../redux/bookFetcher";
import {Book} from "../../components/book/Book";
import "./ownedBookPage.css"


export const OwnedBookPage = () =>{
    const {data, isFetching} = useGetAllUserBooksQuery()

    
    return (
        <div className="ownedBook">
            {!isFetching && data != {}? data.map(book => <Book key={book.id} book={book} isOwned = {true} />) : null}
        </div>
    )
}