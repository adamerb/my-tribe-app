import './App.css';
import { useState } from 'react'
import Login from './components/Login';
import TribalNavBar from './components/TribalNavBar';
import TribalEvents from './components/TribalEvents';
import TribalMeetings from './components/TribalMeetings';
import TribalMusic from './components/TribalMusic';
import TribalMembers from './components/TribalMembers';

const App = () => {
  const [authorize, setAuthorize] = useState();

  if (!authorize) {
    return <Login setAuthorize={setAuthorize}/>
  }

  return (
      <div className="App">
        <header>
          <TribalNavBar/>
        </header>
        <main>
          <TribalMembers/>
          <TribalMeetings/>
          <TribalMusic/>
          <TribalEvents/>
        </main>
    </div>
  )
}

export default App;
