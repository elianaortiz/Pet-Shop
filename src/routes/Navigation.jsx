import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function RouteApp() {

    return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    );
}

const Navigation = () => {
    return(
        <Router>
            <Navbar/>
            <RouteApp/>
            <Footer/>
        </Router>
    )
}

export default Navigation;