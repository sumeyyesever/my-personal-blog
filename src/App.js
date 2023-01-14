import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home";
import SinglePost from "./pages/singlepost/SinglePost";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (

 
 <Router >
 <TopBar />
 <Routes >
 <Route exact path="/" element={<Home />}/>
 <Route path="/post/:postId" element={<SinglePost/>}/>
 </Routes>
 </Router>


    
  );
}

export default App;
