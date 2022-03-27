export function Hero() {
    return (
        <div className="content-area">
            <div className="hero-image">
                <img className="hero-img" src={require("./hero.jpg")} alt="Thrift Shop Truck" loading="lazy" />
            </div>
            <div className="content-heading">
                <h1 className="hero-heading">One stop for pre-loved goods. Clothing which was destined for you...</h1>
            </div>
        </div>
    )
}