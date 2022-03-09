import './App.css';
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllReadings from './AllReadings';
import ReadingDetail from './ReadingDetails';
import Contact from './contact';
import NotFound from './NotFound';
import TwoHours from './twohours';
import TwoDays from './twodays';

function App() {
  
  return (
    <Router>    
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />            
            <Route path='/allreadings' element={<AllReadings />} />             
            <Route path='/readings/:id' element={<ReadingDetail/>} />     
            <Route path='/2hours' element={<TwoHours/>} />  
            <Route path='/2days' element={<TwoDays/>} />   
            <Route path='/contact' element={<Contact/>} />       
            <Route path='*' element={<NotFound/>} />            
          </Routes>
        </div>
      </div>
   </Router>
  );
}

export default App;
