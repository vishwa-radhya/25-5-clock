import './App.scss';
import { AudioSelectProvider } from './audio-select-context';
import ClockContainer from './clock-container';
import { PlayerProvider } from './player-context';

function App() {

  return (
    <>
      <PlayerProvider>
        <AudioSelectProvider>
          <ClockContainer/>
        </AudioSelectProvider>
      </PlayerProvider>
    </>
  )
}

export default App
