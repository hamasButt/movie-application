import {
    BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routing from "./common/Routing/Routing";


const App = () => {


    return (
        <div className='app'>
            <Router>
                <Header/>
                <div className="container">
                    <Routing/>
                </div>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
