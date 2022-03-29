import "./pages-styles/login-page.css"
import { Navbar } from "../Components/Navbar/Navbar.jsx"
import { Link } from "react-router-dom"

export default function SignupPage() {
    return (
        <div class="main-container">
        <Navbar />
        <div class="content-container">
            <div class="login-container">
                <div class="login-elements">
                    <div class="login-hero">Sign Up</div>
                    <div class="login email">
                        <label for="text">Email address</label> 
                        <input type="text" placeholder = "aqsa@gmail.com" />
                    </div>
                    <div class="login password">
                        <label for="text">Password</label>
                        <input type="text" placeholder = "*****" />
                    </div>
                    <div class="login details">
                        I accept all terms and Conditions
                    </div>
                    <div class="buttons">
                        <a class = "button button-primary">Create New Account</a>
                        <br />
                        <Link class = "button button-secondary" to="/login">Already have an account?</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}