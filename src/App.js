import './App.css';
import TribalNavBar from './components/TribalNavBar';
import TribalEvents from './components/TribalEvents';
import TribalMeetings from './components/TribalMeetings';
import TribalMusic from './components/TribalMusic';
import TribalMembers from './components/TribalMembers';

function App() {
  return (
    <div className="App">
      <TribalNavBar/>
      <TribalMembers/>
      <TribalMeetings/>
      <TribalMusic/>
      <TribalEvents/>
    </div>
  )
}

export default App;
