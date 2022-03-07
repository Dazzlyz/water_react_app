import './App.css';
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllReadings from './AllReadings';
import ReadingDetail from './ReadingDetails';
import Contact from './contact';
import NotFound from './NotFound';

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
            <Route path='/contact' element={<Contact/>} />          
            <Route path='*' element={<NotFound/>} />            
          </Routes>
        </div>
      </div>
   </Router>
  );
}

export default App;
