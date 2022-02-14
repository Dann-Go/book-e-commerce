function SignInForm() {

    const submitForm = () => {

    }

    return (
        <form className="form" onSubmit={submitForm}>
            <div className="form__group">
                <label className="form__label">Username</label>
                <input className="form__input" type="text"/>
            </div>
            <div className="form__group">
                <label className="form__label">Password</label>
                <input className="form__input" type="password"/>
            </div>
            <button className="form__button" type="submit" disabled>SIGN IN</button>
        </form>
    );
}

export default SignInForm;