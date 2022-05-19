import {Book} from "../../components/Book/Book";
import {bookApi, useGetAllBooksQuery} from "../../redux/bookFetcher";
import './homePage.css'

export const HomePage = () => {

    const {data, isFetching} = useGetAllBooksQuery()

    return (
        <div className="homePage">
            {!isFetching ? data.map(book => <Book key={book.id} book={book} isInCart={false}/>) : null}
        </div>
    )
}
