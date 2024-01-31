

export default function Square({content,clicked}){
    let styleDiv = {
        display: "flex",
        justifyContent: "center",
        cursor: "default",
        alignItems: "center",
        fontWeight: "bold",
        border: "2px solid black",
        fontSize: "1.5em",
      };
    return(<div onClick={clicked} style={styleDiv}>{content}</div>)
}