import "./App.css";

import logo from "../src/assets/defi-kingdoms-logo-big.png";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header__logo logo">
            <img src={logo} alt="" />
          </div>
        </header>
        <main className="main">
          <div className="main__preTitle">WELCOME TO THE KINGDOM!</div>
          <div className="main__title">
            A DeFi game built on the blockchain, designed with useable NFTs
          </div>
          <a href="https://defikingdoms.me/#/" className="main__link">
            start playing
          </a>
        </main>
      </div>
    </div>
  );
}

export default App;
