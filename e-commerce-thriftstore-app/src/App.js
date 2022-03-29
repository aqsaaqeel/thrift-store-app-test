// import "./App.css";
import LandingPage from "./Pages/landing-page.jsx";
import CartPage from "./Pages/cart-page.jsx";
import LoginPage from "./Pages/login-page.jsx"
import SignupPage from "./Pages/signup-page.jsx"
import WishlistPage from "./Pages/wishlist-page.jsx"
import { Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
                    <Routes>
                        <Route exact path ="/" element = {<LandingPage />} />
                        <Route exact path ="/cart" element = {<CartPage />} />
                        <Route exact path ="/login" element = {<LoginPage />}/>
                        <Route exact path ="/signup" element = {<SignupPage />}/>
                        <Route exact path ="/wishlist" element = {<WishlistPage />}/>
                    </Routes>
        </div>
    );
}

export default App;
