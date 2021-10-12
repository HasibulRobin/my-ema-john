import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="login-form">
            <div>
                <form action="">
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account? <Link to="/login">Login</Link></p>
                <div>--------or--------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;