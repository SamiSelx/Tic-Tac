import "./App.css";
import Square from "./Square";
import Button from "./Button";
import successSound from './success.mp3'
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
  const [history,setHistory] = useState({number: 0, hist: new Array(9).fill(null)})
  const [buttons,setButtons] = useState(new Array(9).fill(null))

  function handleClicked(i) {
    if (squares[i] || calculateWinner(squares)) return;

    let val = value == "X" ? "O" : "X";

    let newSquares = [...squares];
    newSquares[i] = val;
    let histo = new Array(9).fill(null)
    histo = [...history.hist]
    histo[history.number] = [...newSquares]
    histo.push(val)
    setHistory({number: history.number+1,hist: histo})
    console.log(histo)
    //Create Buttons 

    let btn = [...buttons] 
    btn[history.number]= history.number>=1 && <li key={history.number}><Button value={history.number} clickedBtn= {()=>{btnClicked(history.number -1)}} /></li>
    setButtons(btn)
    console.log(buttons)
    console.log(history)

    /**Create Buttons  **/
    setSquares(newSquares);
    setValue(val);
    let statusVal = val == "X" ? "O" : "X";
    if (calculateWinner(newSquares)) {
      setStatus("WINNER IS :" + calculateWinner(newSquares));
      new Audio(successSound).play()
      
    } else setStatus("Next Player : " + statusVal);
  }

  function handleResetClick() {
    setSquares(new Array(9).fill(null));
    setStatus("Next Player : X");
    setValue(null);
    setHistory({number: 0,hist: new Array(9).fill(null)})
    setButtons(new Array(9).fill(null))
  }

  function btnClicked(id){
    setSquares(history.hist[id])
    setValue(history.hist[id+9])
    console.log(history)
    let statusVal = history.hist[id+9] == "X" ? "O" : "X";
    setStatus("Next Player : " + statusVal)

  }

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center",  flexDirection:'column', alignItems:"center" }}>
      
      <div style={{display:"flex",justifyContent:"center", alignItems:"center", padding: "50px 100px",
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 50%)"}}>
      <div>
      <h4 style={{color: "#252E3B"}}>{status}</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridTemplateRows: "repeat(3,1fr)",
            width: "150px",
            height: "150px",
            boxShadow: "1px 1px 13px rgba(0,0,0,25%)"
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
        </div>
        <ol className="history">
          <li>
            <button className="historyBtn" onClick={handleResetClick}>GO to game Start</button>
          </li>
          {/* <li>
            <button onClick={()=>{btnClicked(0)}}>Go First Move</button>
          </li> */}
          {buttons}
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

