import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import Header from "./PortfolioContainer/Header/Header";
import Footer from "./PortfolioContainer/Footer/Footer";
import About from "./PortfolioContainer/AboutMe/About";
import Music from "./PortfolioContainer/Music/Music";
import Gallery from "./PortfolioContainer/Gallery/Gallery";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Profile />
                  <About />
                </>
              );
            }}
          ></Route>
          <Route exact path="/music">
            <Music />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
