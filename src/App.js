
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App bg-gradient-to-r from-purple-400 via-pink-200 to-purple-300">
      <h2 className='text-5xl font-bold pt-12'>Tic Tac Toe Game</h2>
      <TicTacToe />
    </div>
  );
}

export default App;
