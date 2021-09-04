import Content from "./pages/Content";
import {BrowserRouter as Router} from "react-router-dom";
import './App.scss';

function App() {
    return (
        <Router>
            <div className="bg-milk">
                <Content/>
            </div>
        </Router>
    );
}

export default App;
