import "./Card.css";

export function Card() {
    return (
        <div className="comp" id="card-component">
            <div className="photo-card-container horizontal">
                <div className="basic-card-container horizontal">
                    <div className="photo-area horizontal">
                        <div className="photo-comp">
                            <div className="photo-badge horizontal">
                                <i className="fa fa-heart"></i>
                            </div>
                            <img className="card-photo horizontal" src={require("./jacket.jpg")} alt="Green Jacket" loading="lazy"/>
                        </div>
                    </div>

                    <div className="card-footer horizontal">
                        <div className="price">
                            <div className="card-subheading">New Arrivals</div>
                            <div className="small-space"></div>
                        </div>
                        <div className="small-space"></div>
                        <div className="card-heading">Summer Collection</div>
                        <div className="card-subheading detail">Get your favorite summer clothes at affordable
                            prices</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function SmallCard(props) {
    return (
        <div className="small-container">
            <img className="man-image" src={props.url} alt="Shirts"/>
            <p className="man-text">{props.name}</p>
        </div>
    )
}