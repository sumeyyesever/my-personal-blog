import "./topbar.css";

export default function TopBar(){
    return (
        <div className="top">
        <div className="topLeft">
            <h1 className="topTitle">things that i love.</h1>
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
