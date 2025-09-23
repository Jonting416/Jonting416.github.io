import { GAME_TITLE } from "./constants";
import { puzzleIndex } from "./time-utils";
import { generateEmojiGrid } from "./game-helpers";

export const shareStatus = (
  gameData,
  submittedGuesses,
  handleShareToClipboard,
  handleShareFailure,
  includeGameLink = true
) => {
  const GAME_URL = window.location.href;
  const textToShare =
    `${GAME_TITLE} #${puzzleIndex}\n\n` +
    generateEmojiGrid(gameData, submittedGuesses, true) +
    `${includeGameLink ? "\n\n" + GAME_URL : ""}`;

  try {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToShare)
        .then(handleShareToClipboard)
        .catch(handleShareFailure);
    } else {
      handleShareFailure();
    }
  } catch (error) {
    handleShareFailure();
  }
};
