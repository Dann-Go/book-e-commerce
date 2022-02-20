import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RouterPaths} from "./consts/RouterPaths";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NavBar from "./components/Navbar/NavBar";
import {HomePage} from "./pages/HomePage/HomePage";
import {OwnedBookPage} from "./pages/OwnedBookPage/OwnedBookPage";
import CreateBookPage from "./pages/CreateBookPage/CreateBookPage";
import EditBookPage from "./pages/EditBookPage/EditBookPage";
import CartPage from "./pages/CartPage/CartPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
    return (
        <Router>
            <div className='layout'>
                <NavBar/>
                <main className='layout__main'>
                    <Routes>
                        <Route path={RouterPaths.SIGN_IN} element={<SignInPage/>}/>
                        <Route path={RouterPaths.SIGN_UP} element={<SignUpPage/>}/>
                        <Route path={RouterPaths.HOME} element={<HomePage/>}/>
                        <Route path={RouterPaths.OWNED_BOOKS} element={<ProtectedRoute element={<OwnedBookPage/>}
                                                                                       redirectTo={RouterPaths.SIGN_IN}/>}/>
                        <Route path={RouterPaths.CREATE_BOOKS} element={<ProtectedRoute element={<CreateBookPage/>}
                                                                                        redirectTo={RouterPaths.SIGN_IN}/>}/>
                        <Route path={RouterPaths.EDIT_BOOKS} element={<ProtectedRoute element={<EditBookPage/>}
                                                                                      redirectTo={RouterPaths.SIGN_IN}/>}/>
                        <Route path={RouterPaths.CART} element={<ProtectedRoute element={<CartPage/>}
                                                                                redirectTo={RouterPaths.SIGN_IN}/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
