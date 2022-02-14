import * as authenticator from "../../../redux/authenticator";
import TokenStorage from "../../../utils/storage/TokenStorage";
import UserStorage from "../../../utils/storage/UserStorage";
import {useState} from "react";


const SignUpForm = () => {

    const [nameState, setName] = useState();
    const [lastNameState, setLastName] = useState();
    const [usernameState, setUsername] = useState();
    const [passwordState, setPassword] = useState();


    const [signUp, {error}] = authenticator.useSignUpMutation();
    const submitForm = async (event) => {
        event.preventDefault();
        const body = {
            "name": nameState,
            "lastName": lastNameState,
            "login": usernameState,
            "passwordHash": passwordState
        };
        const data = await signUp(body).unwrap();
        TokenStorage.saveToken(data.token)
        UserStorage.saveUser(data.user)
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
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
                <label className="form__label">Name</label>
                <input className="form__input" type="text" name="name" placeholder="Name" value={nameState}
                       onChange={handleNameChange}/>
            </div>
            <div className="form__group">
                <label className="form__label">Last Name</label>
                <input className="form__input" type="text" name="lastName" placeholder="Last Name" value={lastNameState}
                       onChange={handleLastNameChange}/>
            </div>
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
            <button className="form__button" type="submit">SIGN UP</button>
        </form>
    );
}

export default SignUpForm