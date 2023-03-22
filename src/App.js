import { useState } from "react";

function Square({ value, onSquareClick }){

  return(
      <button className="square" onClick={onSquareClick}>{value}</button>
    ) 
}


export default function Board(){

  // used to track the state of whose turn it is
  const [xIsNext, setXIsNext] = useState(true);
  // sets the array of squares and passes them down as props to the square child
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    
    // Return if there is already a value in the square 
    if(squares[i]){
      return;
    }
    // Create a copy of the initial array to allow for rewindng of turns
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O"
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

     
    </>
  );
}