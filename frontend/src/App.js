import './App.css';
import Login from './Login';
import Signup from './Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home';
import Leaves from './Leaves';
import ApplyLeave from './ApplyLeave';
import RevokeLeave from './RevokeLeave';
import Profile from './Profile';
import ChnagePassword from './ChangePassword';
import Manageleaves from './Manageleaves';
import UpdateLeave from './UpdateLeave';
import Sidebar from './Sidebar';
import Compfornavigate from './Compfornavigate';
import Refresh from './Refresh';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/leaves' element={<Leaves />}></Route>
          <Route path='/applyleave' element={<ApplyLeave />}></Route>
          <Route path='/revokeleave' element={<RevokeLeave />}></Route>
          <Route path='/manageleave' element={<Manageleaves />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/changepassword' element={<ChnagePassword />}></Route>
          <Route path='/updateleave' element={<UpdateLeave />}></Route>
          <Route path='/compfornavigate' element={<Compfornavigate />}></Route>
          <Route path='/refresh' element={<Refresh />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;





 
//}
// import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useState } from 'react';
// import { Link } from 'react-router-dom'
//<div className="col py-3" id="contentarea" >
    // </div>
        // const path=window.location.pathname;
    // console.log(path)
    // const [isActive, setIsActive] = useState(false)
    // if(path=='/Login' || path=='signup' ||path=='/'){
    //    setIsActive(true)
    // }
    //     return (
    //     <div>
    //     <BrowserRouter>
    //     <Routes>
    //       <Route path='' element={<Login />}></Route>
    //       <Route path='/login' element={<Login />}></Route>
    //       <Route path='/signup' element={<Signup />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    //     </div>)className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" 
    // }
    // else{