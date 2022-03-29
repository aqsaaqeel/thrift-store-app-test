import "./FilterNavbar.css"
export function FilterNavbar() {
    return (
        <div className="navigation">
            <ul className="main-list">
                <li>
                    <div className="navbar navheading">
                        <a href="#">
                            <span className="title">Filter</span>
                        </a>
                        <a href="#">
                            <span className="title">Clear</span>
                        </a>
                    </div>
                </li>
                <div className="small-space"></div>
                <li>
                    <div className="navbar navlist">
                        <a href="#">
                            <span className="title">Price</span>
                        </a>
                        <a href="#">
                            <span className="title"> Slider Component</span>
                        </a>
                    </div>
                </li>
                <div className="small-space"></div>
                <li>
                    <div className="navbar navlist">
                        <div className="head-nav">
                            <a href="#">
                                <span className="title">Category</span>
                            </a>
                        </div>
                        <div className="nav-sublists">
                            <ul>
                                <li>
                                    <input type="checkbox" name="c1" id="c1" />
                                    <label for="c1">Men's Clothing</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="c1" id="c1" />
                                    <label for="c1">Men's Clothing</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <div className="small-space"></div>
                <li>
                    <div className="navbar navlist">
                        <div className="head-nav">
                            <a href="#">
                                <span className="title">Rating</span>
                            </a>
                        </div>
                        <br />
                        <div className="nav-sublists">
                            <ul>
                                <li>
                                    <input type="radio" name="c1" id="c1" />
                                    <label for="s1">4 Stars & above</label>
                                </li>
                                <li>
                                    <input type="radio" name="c1" id="c1" />
                                    <label for="s2">3 Stars & above</label>
                                </li>
                                <li>
                                    <input type="radio" name="c1" id="c1" />
                                    <label for="s3">2 Stars & above</label>
                                </li>
                                <li>
                                    <input type="radio" name="c1" id="c1" />
                                    <label for="s4">1 Stars & above</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <div className="small-space"></div>
                <li>
                    <div className="navbar navlist">
                        <div className="head-nav">
                            <a href="#">
                                <span className="title">Sort by</span>
                            </a>
                        </div>
                        <br />
                        <div className="nav-sublists">
                            <ul>
                                <li>
                                    <input type="radio" name="c1" id="c1" />
                                    <label for="s1">Price - Low to High</label>
                                </li>
                                <li>
                                    <input type="radio" name="c1" id="c1" />
                                    <label for="s2">Price - High to Low</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}