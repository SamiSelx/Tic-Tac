import "./App.css";
import Square from "./Square";
import { useState } from "react";

function App() {
  // const [player, setPlayer] = useState({
  //   isNext: true,
  //   nextPlayer: "X",
  //   numberOfPlays: 0,
  //   buttons: [],
  // });

  const [value, setValue] = useState(null);
  const [status, setStatus] = useState("Next Player : X");
  const [squares, setSquares] = useState(new Array(9).fill(null));

  function handleClicked(i) {
    if (squares[i] || calculateWinner(squares)) return;

    let val = value == "X" ? "O" : "X";

    let newSquares = [...squares];
    newSquares[i] = val;
    setSquares(newSquares);
    setValue(val);
    let statusVal = val == "X" ? "O" : "X";
    if (calculateWinner(newSquares)) {
      setStatus("winner is :" + calculateWinner(newSquares));
    } else setStatus("Next Player : " + statusVal);
  }

  function handleResetClick() {
    setSquares(new Array().fill(null));
    setStatus("Next Player : X");
    setValue(null);
  }

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center",  flexDirection:'column',marginLeft:"50px" }}>
      <h4>{status}</h4>
      <div style={{display:"flex", alignItems:"center"}}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridTemplateRows: "repeat(3,1fr)",
            width: "150px",
            height: "150px",
          }}
        >
          <Square
            content={squares[0]}
            clicked={() => {
              handleClicked(0);
            }}
          />
          <Square
            content={squares[1]}
            clicked={() => {
              handleClicked(1);
            }}
          />
          <Square
            content={squares[2]}
            clicked={() => {
              handleClicked(2);
            }}
          />
          <Square
            content={squares[3]}
            clicked={() => {
              handleClicked(3);
            }}
          />
          <Square
            content={squares[4]}
            clicked={() => {
              handleClicked(4);
            }}
          />
          <Square
            content={squares[5]}
            clicked={() => {
              handleClicked(5);
            }}
          />
          <Square
            content={squares[6]}
            clicked={() => {
              handleClicked(6);
            }}
          />
          <Square
            content={squares[7]}
            clicked={() => {
              handleClicked(7);
            }}
          />
          <Square
            content={squares[8]}
            clicked={() => {
              handleClicked(8);
            }}
          />
        </div>
        <ol className="history" style={{alignSelf:'flex-start'}}>
          <li>
            <button onClick={handleResetClick}>GO to game Start</button>
          </li>
          {/* {player.buttons} */}
        </ol>
      </div>
    </div>
  );
}

export default App;

function calculateWinner(squares) {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < wins.length; i++) {
    let [a, b, c] = wins[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }

  return null;
}

// if (e.target.innerHTML == "") {
// e.target.innerHTML = player.nextPlayer;

// setPlayer({
//   ...player,
//   nextPlayer: player.nextPlayer == "X" ? "O" : "X",
//   numberOfPlays: player.numberOfPlays + 1,
//   buttons: [
//     ...player.buttons,
//     <li>
//       <button>Go to Move #{player.numberOfPlays + 1}</button>
//     </li>,
//   ],
// });
// }
