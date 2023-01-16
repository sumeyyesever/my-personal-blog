import "./post.css";

export default function Post(){
    return (
        <div className="post">
            <img className="postImg" src="https://fahrenheitmagazine.b-cdn.net/sites/default/files/styles/xl/public/field/image/adentrate_al_universo_de_miyazaki_y_el_studio_ghibli_con_estas_cinco_curiosidades.jpg" alt=""></img>
            <div className="postInfo">
                
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Music</span>
                </div>
                <span className="postTitle">Title</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
        </div>
    )
}
