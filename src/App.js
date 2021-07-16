import Navigation from './components/Navbar.js';
import Footer from './components/Footer.js';
import PriceFeed from './components/PriceFeed.js';
import Home from './components/Home.js';
import feeds from './helpers/feeds.js';
import './style/Main.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const routeItems = feeds.map((feed) =>
  <Route key={feed.id} path={"/feeds/" + feed.id}>
    <PriceFeed idNum={feed.id} />
  </Route>
)

function App() {
  return (
    <>
    <Navigation />
    <Router>
      <div className="container">
        <Switch>
          {routeItems}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <br />
    <br />
    <Footer />
    </>
  );
}

export default App;
