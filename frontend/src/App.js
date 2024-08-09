
import './App.css';
import Courses from './layout/Courses';

import Home from './layout/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './layout/SignUp';
import ContactUs from './layout/ContactUs';
import  { Toaster } from 'react-hot-toast';
import { useUserinPage } from './Context/AuthProvider';



function App() {
  const [userlogin ,setuserlogindata]= useUserinPage();

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={userlogin?<Courses />:<SignUp />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Routes>
    </Router>
    <Toaster />
    </>
  );
}

export default App;
