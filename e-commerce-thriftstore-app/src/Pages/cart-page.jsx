import "./pages-styles/cart-page.css"
import { Navbar } from "../Components/Navbar/Navbar.jsx";
import { VerticalCard } from "../Components/Card/Card.jsx";
import { FilterNavbar } from "../Components/FilterNavbar/FilterNavbar.jsx";
function CartPage() {
    return (
        <div className="main-container">
            <Navbar />

            <div className="container">
                <FilterNavbar />

                <div className="content-area">
                    <div className="content-heading">
                        <h1>Showing all products</h1>
                        <p>(Showing 20 products)</p>
                    </div>
                    <div className="product-container">
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default CartPage