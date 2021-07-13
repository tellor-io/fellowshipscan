import Transactions from './components/Transactions.js';
import CurrentInfo from './components/CurrentInfo.js';
import Navigation from './components/Navbar.js';
import HistoricalFeed from './components/HistoricalFeed.js';
import './style/Main.css'

function App() {
  return (
    <>
    <Navigation />
    <div className="container">
      <br />
      <button type="button" id="back" class="btn btn-dark">← back to home</button>
      <br />
      <br />
      <br />
      <div className="card">
        <div className="card-body">
            <h1 class="id-name">ETH/USD  <span class="id-number">ID: 2</span> </h1>
            <div className="row">
              <div className="col">
                <br />
                <CurrentInfo />
                <br />
              </div>
              <div className="col">
                <br />
                <HistoricalFeed />
              </div>
            </div>
            <br />
            <div className="row">
              <br />
              <Transactions />
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
