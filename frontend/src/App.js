import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RouterPaths} from "./consts/RouterPaths";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NavBar from "./components/navbar/NavBar";
import {HomePage} from "./pages/HomePage/HomePage";
import {OwnedBookPage} from "./pages/OwnedBookPage/OwnedBookPage";
import CreateBookPage from "./pages/CreateBookPage/CreateBookPage";
import EditBookPage from "./pages/EditBookPage/EditBookPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path={RouterPaths.SIGN_IN} element={<SignInPage/>}/>
                <Route path={RouterPaths.SIGN_UP} element={<SignUpPage/>}/>
                <Route path={RouterPaths.HOME} element={<HomePage/>}/>
                <Route path={RouterPaths.OWNED_BOOKS} element={<OwnedBookPage/>}/>
                <Route path={RouterPaths.CREATE_BOOKS} element={<CreateBookPage/>}/>
                <Route path={RouterPaths.EDIT_BOOKS} element={<EditBookPage/>}/>
                <Route path={RouterPaths.CART} element={<CartPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
