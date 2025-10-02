import React from "react";

import { GAME_TITLE } from "../../lib/constants";
import InfoModal from "../modals/InfoModal";

function Header() {
  return (
    <header className="header-bar">
      <span className="w-[24px] font-bold uppercase sm:text-base md:text-xl"></span>
      <a href="/index.html">
        <img className="logo" href="index.html" src="/data/jtgameslogoinverted.svg" alt={GAME_TITLE}/>
      </a>
      <InfoModal />
    </header>
  );
}

export default Header;
