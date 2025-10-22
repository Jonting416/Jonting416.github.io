import React from 'react';
import "./styles/App.scss";

function EmbedCrosshare() {
    return (
      <div className="crossword">
        <header className="header-bar">
          <a href="../index.html">
            <img className="logo" href="index.html" src="/data/jtgameslogoinverted.svg" alt="???"/>
          </a>
        </header>
        <iframe style={{height: "85vh", width: "100%", "margin-top": "60px"}}
          src="https://crosshare.org/embed/Mcm2gKtHj4WdYkBlufFA/IsflylxT9BXFFZbykdgp6PI7lyt2" frameBorder="0"
          allowFullScreen="true" allowTransparency="true" allow="clipboard-write *">
        </iframe>
      </div>
    );
}

export default EmbedCrosshare;