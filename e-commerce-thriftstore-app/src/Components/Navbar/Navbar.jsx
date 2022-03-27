import "./Navbar.css";
export function Navbar() {
    return(
    <div className="nav-container">
        <a href = "/">
            <div className="logo">Thrift Store</div>
        </a>    
            <div className="serch-bar">
            <input className="nav-input" type="text" placeholder="Search" />
        </div>
        <div className="menu-items">
            <ul className="menu-items">
                <li className="list-item"><a className="menu-link" href="/login-signup/login.html">Login</a></li>
                <li className="list-item"><a className="menu-link" href="/wishlist"><i
                    className="fa fa-heart">Wishlist</i></a></li>
                <li className="list-item"><a className="menu-link" href="/cart-page">Cart</a></li>
            </ul>
        </div>
    </div>
    )
}
