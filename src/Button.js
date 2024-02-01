

export default function button({value, clickedBtn}){
    return <button onClick={clickedBtn} className="historyBtn">Move To #{value}</button>
}