import "./singlePost.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        }
        getPost();
    }, [path]);

    return (
        <div className="singlePost">
            {post.photo && (<img className="singlePostImg" src={post.photo} alt=""></img>)}

            <h1 className="singlePostTitle">{post.title}</h1>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            <p className="singlePostDesc">{post.desc}</p>
        </div>
    )
}