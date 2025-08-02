import './App.css';
import './Linktree.css';
import logo from './favicon.png';

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="gradient-bg">
        <div className="logo-container">
          <img src={logo} alt="America Party Logo" />
        </div>
        <h1 className="title">StrategyiLoan</h1>
        <p className="subtitle">All Links</p>
      </header>

      {/* Main Content */}
      <main className="main-content">

        <a href="https://forms.gle/UUvco74QGt1ukUHx8" className="link-card">
          <div className="link-label">Google Form</div>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </a>

        <a href="https://strategyiloan.com" className="link-card">
          <div className="link-label">Visit Website</div>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </a>

        <a href="https://strategiesbitcoin.com/" className="link-card">
          <div className="link-label">Strategybitcoin</div>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </a>

        <a href="https://t.me/strategyiloanbitcoin" className="link-card">
          <div className="link-label">Telegram</div>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </a>



        <a href="https://wa.me/16562001132" className="link-card">
          <div className="link-label">Chat on WhatsApp</div>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </a>


        


      </main>
    </div>
  );
}

export default App;
