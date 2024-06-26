import './App.scss';
import ClockContainer from './clock-container';
import { PlayerProvider } from './player-context';

function App() {

  return (
    <>
      <PlayerProvider>
        <ClockContainer/>
      </PlayerProvider>
    </>
  )
}

export default App
