import React, { useState } from 'react';

function Leisure() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const winnerPlayer = calculateWinner(newBoard);
    if (winnerPlayer) {
      setWinner(winnerPlayer);
    }
  };

  const renderSquare = (index) => {
    return (
      <button
        className="square bg-white border border-gray-300 text-6xl font-bold h-24 w-24 flex justify-center items-center"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div>
    <div className="flex flex-col items-center mt-32">
      <div className="game-board flex flex-col">
        <div className="board-row flex">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row flex">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row flex">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info mt-10">
        <div className="text-2xl font-bold mb-2">{status}</div>
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-md text-lg hover:bg-green-600"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
    <footer className="bg-gray-200 py-7 mt-32  w-full">
        <div className="container mx-auto">
          <p className="text-center text-gray-800">© 2024 Task Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Leisure;
