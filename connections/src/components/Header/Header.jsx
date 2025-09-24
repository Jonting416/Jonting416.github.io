import React from "react";

import { GAME_TITLE } from "../../lib/constants";
import InfoModal from "../modals/InfoModal";

function Header() {
  return (
    <header>
        <span className="w-[24px] font-bold uppercase sm:text-base md:text-xl"></span>
      <h1>{GAME_TITLE}</h1>
      <InfoModal />
    </header>
  );
}

export default Header;
