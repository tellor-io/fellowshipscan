import Transactions from './components/Transactions.js';
import CurrentInfo from './components/CurrentInfo.js';
import Navigation from './components/Navbar.js';
import HistoricalFeed from './components/HistoricalFeed.js';

function App() {
  return (
    <>
    <Navigation />
    <div className="container">
      <br />
      <h1>Data on ETH/USD</h1>
      <br />
      <div className="row">
        <div className="col">
          <h3>Current Data</h3>
          <br />
          <CurrentInfo />
          <br />
          <h3>Historical Price Feed</h3>
          <br />
          <HistoricalFeed />
        </div>
        <div className="col">
          <h3>Transaction History</h3>
          <br />
          <Transactions />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
