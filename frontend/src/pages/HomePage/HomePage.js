import {Book} from "../../components/book/Book";
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

// import { useSelector } from "react-redux";
// import { Route, Redirect } from "react-router-dom";
// import { selectIsAuth } from "../features/auth/authSlice";
//
// const ProtectedRoute = (props) => {
//     const { path, redirectTo, isMain, component: Component } = props;
//     const isAuthenticated = useSelector(selectIsAuth);
//
//     if (isMain) {
//         return isAuthenticated ? (
//             <Route path={path} component={Component} />
//         ) : (
//             <Redirect to={redirectTo} />
//         );
//     } else {
//         return !isAuthenticated ? (
//             <Route path={path} component={Component} />
//         ) : (
//             <Redirect to={redirectTo} />
//         );
//     }
// };
//
// export default ProtectedRoute;