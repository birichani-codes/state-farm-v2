// HexagonCategories.jsx
import React from "react";
import { HexagonContainer, Hexagon } from "../hexagon-categories/hexagon-categories.styles";

const r = 120;

function createBoard() {
  console.log("Creating board...");
  const rosLengthList = [3, 4, 5, 4, 3];
  return rosLengthList.map((length) => new Array(length).fill(0));
}

function put(board, rowIndex, cellIndex, side) {
  const newBoard = board.map((row) => [...row]);
  newBoard[rowIndex][cellIndex] = side;
  return newBoard;
}

function changeSide(side) {
  return side === "A" ? "B" : "A";
}

const HexagonCategories = () => {
  const [board, setBoard] = React.useState(createBoard());
  const [currentSide, setCurrentSide] = React.useState("A");

  console.log("Rendering HexagonCategories");

  const handleHexagonClick = (rowIndex, cellIndex) => {
    setBoard((prevBoard) => put(prevBoard, rowIndex, cellIndex, currentSide));
    setCurrentSide(changeSide(currentSide));
  };

  return (
    <HexagonContainer className="App" style={{ marginTop: "35px" }}>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        {board.map((row, rowIndex) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            key={rowIndex}
          >
            {row.map((side, cellIndex) => (
              <Hexagon
                side={side}
                style={{ height: `${r}px`, width: `${r}px`, margin: "5px" }}
                onClick={() => handleHexagonClick(rowIndex, cellIndex)}
                key={cellIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </HexagonContainer>
  );
};

export default HexagonCategories;
