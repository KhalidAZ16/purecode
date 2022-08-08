import "./App.css";
import NavBar from "./components/NavBar";
import NavBarAr from "./components/NavBarAr";
// import Footer from "./components/footer";
// import FooterAr from "./components/footerAr";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AboutUsAr from "./components/AboutUsAr";
import HomeAr from "./components/HomeAr";

function App() {
  // const location = useLocation();
  return (
    <>
      <div className="app">
        {/* <h1>Yo</h1> */}
        <Router>
          <Switch>
            <Route path="/ar">
              <NavBarAr />
            </Route>
            <Route path="/en">
              <NavBar />
            </Route>
          </Switch>
          <div className="content">
            {/* <h1>hello</h1> */}
            <Switch>
              <Route exact path="/ar/home">
                <HomeAr />
              </Route>
              <Route exact path="/ar/aboutus">
                <AboutUsAr />
              </Route>
              <Route exact path="/en">
                <Home />
              </Route>
              <Route exact path="/en/aboutus">
                <AboutUs />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
