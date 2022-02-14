import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RouterPaths} from "./consts/RouterPaths";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={RouterPaths.SIGN_IN} element={<SignInPage/>}/>
                <Route path={RouterPaths.SIGN_UP} element={<SignUpPage/>}/>
                <Route path={RouterPaths.HOME} element={null}/>
            </Routes>
        </Router>
    );
}

export default App;
