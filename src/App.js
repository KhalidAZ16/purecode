import "./App.css";
import NavBar from "./components/NavBar";
import NavBarAr from "./components/AR/NavBarAr";
import Services from "./components/Services";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import FooterAr from "./components/AR/FooterAr";
import Career from "./components/Career";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AboutUsAr from "./components/AR/AboutUsAr";
import HomeAr from "./components/AR/HomeAr";
import ServicesAr from "./components/AR/ServicesAr";
import ContactUsAr from "./components/AR/ContactAr";

function App() {
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
              <Route exact path="/en/home">
                <Home />
              </Route>
              <Route exact path="/en/aboutus">
                <AboutUs />
              </Route>
              <Route exact path="/en/career">
                <Career />
              </Route>
              <Route exact path="/ar/services">
                <ServicesAr />
              </Route>
              <Route exact path="/en/services">
                <Services />
              </Route>
              <Route exact path="/en/contactus">
                <ContactUs />
              </Route>
              <Route exact path="/ar/contactus">
                <ContactUsAr />
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <Switch>
              <Route path="/ar">
                <FooterAr />
              </Route>
              <Route path="/en">
                <Footer />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
