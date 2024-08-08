
import './App.css';
import Courses from './layout/Courses';

import Home from './layout/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './layout/SignUp';
import Login from './layout/Login';
import ContactUs from './layout/ContactUs';


function App() {
  return (
    
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={<Courses />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Routes>
    
    </Router>
  );
}

export default App;
