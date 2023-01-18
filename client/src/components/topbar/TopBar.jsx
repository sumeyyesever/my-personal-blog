import { Link, NavLink } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <h1 className="topTitle"> <Link to="/" className="link">things that i love.</Link> </h1>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <Link to={`/?cat=painting`} className="link"><li className="topListItem">paintings</li></Link>
                    <Link to={`/?cat=film`} className="link"><li className="topListItem">films</li></Link>
                    <Link to={`/?cat=music`} className="link"><li className="topListItem">music</li></Link>
                    <Link to={`/?cat=book`} className="link"><li className="topListItem">books</li></Link>
                </ul>
            </div>
        </div>
    )

}
