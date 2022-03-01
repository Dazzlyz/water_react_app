import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'Menno';
  const date = 1;
  const link = 'https://wiki.seeedstudio.com/Grove-Moisture_Sensor';
  return (
    <div className="App">
      <div className='content'>
      <h1>{name}'s components</h1>
      <p>Made {date} March</p>
      <a href={link}>Sensor used</a>
      </div>
    </div>
  
  );
}

export default App;
