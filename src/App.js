import './App.css';
import {useState} from 'react'
function App() {
  const [player, setPlayer] = useState({
    isNext : true,
    nextPlayer: 'X',
    numberOfPlays: 0,
    buttons: []

  })
  
  function handleClicked(e){
    if(e.target.innerHTML == ""){
      e.target.innerHTML = player.nextPlayer 
      
      setPlayer({...player, nextPlayer: player.nextPlayer == 'X'? 'O': 'X',numberOfPlays: player.numberOfPlays + 1,buttons : [...player.buttons,<li><button>Go to Move #{player.numberOfPlays +1}</button></li>]})
      
    }
  }
  let styleDiv = {display: "flex",justifyContent:"center",cursor: "default",alignItems:"center",fontWeight:"bold",border:"2px solid black",fontSize: "1.5em"}
  let divs = []
  for(let i=0;i<9;i++){
    divs.push(<div onClick={(e)=>{handleClicked(e); }} style={styleDiv}></div>)
  }


  
  
  return (
   <div style={{height:"100vh",display:"flex",justifyContent:"center",}}>
    <div>
      <h4>Next Player : {player.nextPlayer}</h4>
      <div style={{display: "grid",gridTemplateColumns: 'repeat(3,1fr)',gridTemplateRows:'repeat(3,1fr)',width:'150px',height:"150px"}}>
        {divs}
      </div>
    </div>
    <ol className='history'>
        <li><button>GO to game Start</button></li>
        {player.buttons}
    </ol>
   </div>
  );
}

export default App;
