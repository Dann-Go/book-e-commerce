import {Book} from "../../components/book/Book";
import {bookApi, useGetAllBooksQuery} from "../../redux/bookFetcher";
import './homePage.css'

export const HomePage = () =>{

    const {data, isFetching} = useGetAllBooksQuery()


    return (
        <div className="homePage">
            {!isFetching ? data.map(book => <Book key={book.id.value} book={book}/>) : null}
        </div>
    )
}