import { useState } from 'react';
import SquareBox from './SquareBox';

const TicTacToeBoard = () => {
  const initialState = Array(9).fill(null);
  const [state, setState] = useState(initialState);
  const [isX, setIsX] = useState(true);

  const handleClick = (index) => {
    const copyState = state;
    if (!copyState[index]) {
      copyState[index] = isX ? 'X' : 'O';
      setState(copyState);
      setIsX(!isX);
    }
  };

  const checkWinner = () => {
    const indexes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index of indexes) {
      const [a, b, c] = index;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const resetGame = () => {
    setState(initialState);
    setIsX(true);
  };

  const boardFull = () => {
    return state.every((element) => element !== null);
  };

  const winner = checkWinner();

  return (
    <>
      <div className="board-container">
        <h1 style={{ margin: '10px 0' }}>
          <span style={{ color: '#ee7a8d' }}>Tic</span>
          <span style={{ color: '#7ac8e3' }}>Tac</span>
          <span style={{ color: 'rgb(226, 172, 103)' }}>Toe</span>
        </h1>
        {winner || boardFull ? (
          <h4 style={{ margin: '10px 0' }}>Player {isX ? 'X' : '0'} Turn</h4>
        ) : (
          ''
        )}
        <div className="board-row">
          <SquareBox onClick={() => handleClick(0)} value={state[0]} />
          <SquareBox onClick={() => handleClick(1)} value={state[1]} />
          <SquareBox onClick={() => handleClick(2)} value={state[2]} />
        </div>
        <div className="board-row">
          <SquareBox onClick={() => handleClick(3)} value={state[3]} />
          <SquareBox onClick={() => handleClick(4)} value={state[4]} />
          <SquareBox onClick={() => handleClick(5)} value={state[5]} />
        </div>
        <div className="board-row">
          <SquareBox onClick={() => handleClick(6)} value={state[6]} />
          <SquareBox onClick={() => handleClick(7)} value={state[7]} />
          <SquareBox onClick={() => handleClick(8)} value={state[8]} />
        </div>

        {!winner && boardFull() ? (
          <p style={{ marginTop: '10px', color: 'red' }}>Game Over</p>
        ) : (
          ''
        )}

        {winner ? (
          <h4 style={{ marginTop: '10px', color: 'green' }}>
            Player {winner} won
          </h4>
        ) : (
          ''
        )}

        <button type="button" onClick={() => resetGame()}>
          {winner ? 'Play Again' : 'Reset'}
        </button>
      </div>
    </>
  );
};

export default TicTacToeBoard;
