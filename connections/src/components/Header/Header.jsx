import React from "react";

import { GAME_TITLE } from "../../lib/constants";
import InfoModal from "../modals/InfoModal";

function Header() {
  return (
    <header>
      <h1 className="font-space-mono">{GAME_TITLE}</h1>
      <InfoModal />
    </header>
  );
}

export default Header;
