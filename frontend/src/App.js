import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RouterPaths} from "./consts/RouterPaths";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NavBar from "./components/navbar/NavBar";
import {HomePage} from "./pages/HomePage/HomePage";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path={RouterPaths.SIGN_IN} element={<SignInPage/>}/>
                <Route path={RouterPaths.SIGN_UP} element={<SignUpPage/>}/>
                <Route path={RouterPaths.HOME} element={<HomePage/>}/>
                <Route path={RouterPaths.FAVORITE_BOOKS} element={null}/>
            </Routes>
        </Router>
    );
}

export default App;
