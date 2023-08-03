import "./tictactoe.css";
import { useState } from "react";

const calculatewinner = (boxes) => {
  console.log("Boxes", boxes);
  const winninglines = [
    [0, 1, 2], //toprow
    [3, 4, 5], //secondrow
    [6, 7, 8], //thirdrow
    [0, 3, 6], //firstcolumn
    [1, 4, 7], //secondcolumn
    [2, 5, 6], //thirdcolumn
    [0, 4, 8], //1 diagonal
    [6, 4, 2], //2 diagonal
  ];

  for (let i = 0; i < winninglines.length; i++) {
    const a = winninglines[i][0];
    const b = winninglines[i][1];
    const c = winninglines[i][2];
    const box_a = boxes[a];
    const box_b = boxes[b];
    const box_c = boxes[c];

    if (
      box_a != null &&
      box_b != null &&
      box_c != null &&
      (box_a === box_b) & (box_b === box_c)
    ) {
      return box_a;
    }
  }
};

const Tictactoe = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [player, setplayer] = useState("X");

  const handleBoxClick = (index) => {
    const new_boxes = boxes.map((box, i) => {
      if (i === index) {
        return player;
      }
      return box;
    });

    setBoxes(new_boxes);
    setplayer(player == "X" ? "O" : "X");
  };
  const winner = calculatewinner(boxes);
  if (winner) {
    return (
      <div>
        {winner ? <div>Winner is: {winner}</div> : null}

        <button className="button1" onClick={() => setBoxes(Array(9).fill(""))}>
          Play Again
        </button>
      </div>
    );
  }
  console.log("boxes, boxes");
  return (
    <div className="tic-tac-toe">
      {boxes.map((box, index) => {
        return (
          <div
            className="box"
            key={index}
            onClick={() => handleBoxClick(index)}
          >
            {" "}
            {box}{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Tictactoe;
