import * as authenticator from "../../../redux/authenticator";
import TokenStorage from "../../../utils/storage/TokenStorage";
import UserStorage from "../../../utils/storage/UserStorage";
import userStorage from "../../../utils/storage/UserStorage";
import {useState} from "react";

function SignInForm() {

    const [usernameState, setUsername] = useState();
    const [passwordState, setPassword] = useState();


    const [signIn, {error}] = authenticator.useSignInMutation();
    const submitForm = async (event) => {
        event.preventDefault();
        const body = {
            login: usernameState,
            passwordHash: passwordState
        }

        const data = await signIn(body).unwrap();
        TokenStorage.saveToken(data.token);
        UserStorage.saveUser(data.user);


        const user = userStorage.getUser();
        console.log(user);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <form className="form" onSubmit={submitForm}>
            <div className="form__group">
                <label className="form__label">Username</label>
                <input className="form__input" type="text" name="username" placeholder="Username" value={usernameState}
                       onChange={handleUsernameChange}/>
            </div>
            <div className="form__group">
                <label className="form__label">Password</label>
                <input className="form__input" type="password" name="password" placeholder="Password"
                       value={passwordState}
                       onChange={handlePasswordChange}/>
            </div>
            <button className="form__button" type="submit" >SIGN IN</button>
        </form>
    );
}

export default SignInForm;