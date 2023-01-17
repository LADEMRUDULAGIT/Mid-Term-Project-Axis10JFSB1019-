import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState } from 'react'
import axios from 'axios'
import { getGlobal } from "./globals";
function Sidebar() {
    const employeeid = getGlobal("empid");
       // const [profile,setprofile]=useState([])
        const [empid,setempid]=useState('');
        const [name,setname]=useState('');
        const [email,setemail]=useState('');
        const [role,setrole]=useState('');
        const [leaveCount,setleaveCount]=useState('');
    useEffect(()=>{
        fetch();
    },[])
    const fetch=()=>{
        const urlfetch = `http://localhost:8095/employee/${employeeid}`;
        axios.get(urlfetch).then(res => {
           //setprofile(res.data)
        //    console.log(res.data)
           setempid(res.data.empid)
           setemail(res.data.email)
           setname(res.data.name)
           setleaveCount(res.data.leaveCount)
           setrole(res.data.role)
          // document.getElementById('#employeename').innerHTML=res.data.name;
    })
    }
    return (
        <>
            <div id='sidebar_div' className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" >
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <h1 className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">{name.toLocaleUpperCase()}[{role}]</span>
                    </h1>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item ">
                            <Link to="/home" className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline text-white">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline text-white">Profile</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/leaves" className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline text-white">My Leaves</span>
                            </Link>
                        </li>
                    {role=='manager' ?   <li className="nav-item">
                                <Link to="/manageleave" className="nav-link px-0 align-middle">
                                 <span className="ms-1 d-none d-sm-inline text-white">Manage Leaves</span>
                                </Link>
                            </li>:<li></li>}
                        <li className="nav-item">
                            <Link to="/applyleave" className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline text-white">Apply Leave</span>
                            </Link>
                        </li>
                        
                        {/* <li className="nav-item">
                            <Link to="/changepassword" className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline text-white">Change Password</span>
                            </Link>
                        </li> */}

                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <Link className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="d-none d-sm-inline mx-1">Profile Settings</span>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li >
                            <Link to="/changepassword" className="dropdown-item">
                                 <span className="ms-1 d-none d-sm-inline" >Change Password</span>
                            </Link>
                            </li>
                            
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                            <Link to="/login" className="dropdown-item">
                                 <span className="ms-1 d-none d-sm-inline">Sign Out</span>
                            </Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>

            </div>

        </>
    );
}
export default Sidebar;

// <div className="container-fluid" >
//<div className="row flex-nowrap"></div>
//</div>//<div><h1>hello</h1></div>
{/* <a href="ApplyLeave.js" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Apply Leave</span>
                                     </a> */}<li>
                               // <a className="dropdown-item" href="#">Change Password</a>
                               // </li>
{/* <NavLink to="/leaves">
                                <span className="ms-1 d-none d-sm-inline">Apply Leave</span>
                                </NavLink> */}