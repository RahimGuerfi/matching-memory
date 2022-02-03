import React from "react";
// Add import statement below
import { useSelector } from "react-redux";
import { selectMatchedIDs, selectBoard } from "../board/boardSlice";
export const Score = () => {
  // Add selected data variable below
  const cardsMatched = useSelector(selectMatchedIDs);
  const board = useSelector(selectBoard);

  const matchCount = cardsMatched.length;
  const cardsCount = board.length;
  return (
    // implement selected data inside <div>
    <div className="score-container">
      {cardsCount === matchCount ? "You Won!" : "Matched: " + matchCount}
    </div>
  );
};
