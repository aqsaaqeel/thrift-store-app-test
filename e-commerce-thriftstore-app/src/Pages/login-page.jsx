import "./pages-styles/login-page.css"
import { Navbar } from "../Components/Navbar/Navbar.jsx"
import { Link } from "react-router-dom"
export default function LoginPage() {
    return (
        <div className="main-container">
            <Navbar />
            <div className="content-container">
                <div className="login-container">
                    <div className="login-elements">
                        <div className="login-hero">Login</div>
                        <div className="login email">
                            <label for="text">Email address</label>
                            <input type="text" placeholder="aqsa@gmail.com" />
                        </div>
                        <div className="login password">
                            <label for="text">Password</label>
                            <input type="text" placeholder="*****" />
                        </div>
                        <div className="login details">
                            <div className="remember-check">
                                <input type="checkbox" />
                                    <label for="checkbox">Remember Me</label>
                            </div>
                            <a className="forgot-password" href="#">Forgot your password?</a>
                        </div>
                        <div className="buttons">
                            <a className="button button-primary">Login</a>
                                <Link className="button button-secondary" to="/signup">Create New Account </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}