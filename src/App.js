import './App.scss';
import {Container} from "react-bootstrap";

import SideBar from "./components/sidebar/SideBar";
import Header from "./components/header/Header";
import Content from "./pages/Content";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="bg-milk d-flex d-flex" id="wrapper">
                <SideBar/>
                <div id="page-content-wrapper" className="sticky-top">
                    <Header/>
                    <Container fluid>
                        <Content/>
                    </Container>
                </div>
            </div>
        </Router>
    );
}

export default App;
