import "./pages-styles/landing-page.css";
import { Navbar } from "../Components/Navbar/Navbar.jsx";
import { Card, SmallCard } from "../Components/Card/Card.jsx";
import { Hero } from "../Components/Hero/Hero.jsx";
import { Heading } from "../Components/heading/Heading";

function LandingPage() {
    return (
            <div className="main-container">
                <Navbar />
  
                <div className="landing-container">
                    <Hero />

                    <Heading name = "Categories"/>

                    <div className="landing-card-component-area">
                        <Card collection ="Trendy Collection"/>

                        <Card collection ="Vibrant Collection"/>

                        <Card collection ="Evergreen Collection"/>
                    </div>

                    <Heading name = "Categories"/>

                    <div className="category-container">
                            <SmallCard name ="Men's Apparels" url ={require("../assets/images/man-shirt.jpg")}/>
                            <SmallCard name ="Women's Apparels" url = {require("../assets/images/women-shirt.jpg")}/>
                            <SmallCard name ="Kid's Apparels" url = {require("../assets/images/kids-shirt.jpg")}/>
                            <SmallCard name ="Miscellaneous" url = {require("../assets/images/misc-shirt.jpg")}/>
                    </div>
                    
                </div>
            </div>
    );
}

export default LandingPage;