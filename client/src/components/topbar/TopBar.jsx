import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar(){
    return (
        <div className="top">
        <div className="topLeft">
            <h1 className="topTitle"> <Link to="/" className="link">things that i love.</Link> </h1>
        </div>
        <div className="topRight">
            <ul className="topList">
                <li className="topListItem">paintings</li>
                <li className="topListItem">films</li>
                <li className="topListItem">music</li>
                <li className="topListItem">books</li>
            </ul>
        </div>
    </div>
    )

}
