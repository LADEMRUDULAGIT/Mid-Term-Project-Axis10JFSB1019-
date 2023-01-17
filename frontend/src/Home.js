import Login from "./Login";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import {useEffect,React, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import Leaves from "./Leaves";
import { setGlobal,getGlobal } from "./globals";
import Sidebar from "./Sidebar";
function Home(){
   // const empid=getGlobal("empid");

return(
    <>
        <div className="container-fluid" >
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col py-3"style={{display:'flex',justifyContent:'center',background:'lightgray'}} >
                        <MDBContainer fluid >
                            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                                <MDBCol col='12' >
                                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem' ,height:'650px' }}>
                                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' >
                                        <h2 className="fw-bold mb-2 text-uppercase">Leave Management System</h2>
                                        <dl >
                                            <dt> Description:</dt>
                                            <dd>Leave Management System is a web application for managing employee leaves.
                                                This application provides all the things that a project/team needs like Apply,Revoke,Update leaves.
                                                Through this application one can easily manage leaves. Application maintenance is easy.</dd>
                                            <dt>Employee Actions:</dt>
                                            <dd>
                                                <ul>
                                                    <li><Link to="/applyleave" className="nav-link px-0 align-middle"><u>Apply Leave</u></Link></li>
                                                        <p>This helps an employee to apply leave.</p>
                                                    <li>
                                                    <Link to="/leaves" className="nav-link px-0 align-middle"><u>My Leaves</u></Link>
                                                        <p>Employee can check the history of leaves here.</p>
                                                        <ul><li>Update Leave</li>
                                                                <p>Employee can update the pending leave</p>
                                                            <li>Revoke Leave</li>
                                                            <p>Employee can revoke the pending leave</p>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                    <Link to="/profile" className="nav-link px-0 align-middle"><u>Profile</u></Link>
                                                    </li>
                                                        <p>Employee can check the details and leave count</p>
                                                    <li>
                                                    <Link to="/changepassword" className="nav-link px-0 align-middle"><u>Change Password</u></Link>
                                                    </li>
                                                        <p>Employee can update the password</p>
                                                    <li>
                                                    <Link to="/manageleave" className="nav-link px-0 align-middle"><u>Manage Leave(manager)</u></Link>
                                                    </li>
                                                        <p>Manager can accept and reject leaves of the employees</p>
                                                </ul>
                                            </dd>
                                        </dl>
                                           
                                        </MDBCardBody>
                                        {/* <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100 hover-scroll-overlay-y' style={{ overflowY: 'auto', scrollbarWidth: '1px' }}>
                                            
                                        </MDBCardBody> */}
                                    </MDBCard>

                                </MDBCol>
                            </MDBRow>

                        </MDBContainer>
                    </div>
            </div>
        </div>
    </>
)
}
export default Home;



  //const navigate = useNavigate();
   // const [page,setpage]=useState('');
    //const empid=useLocation().state;


    // if(empid!=null){
    //     setGlobal({ empid : empid });
       
    // }
















{/* <div className="col py-3" id="contentarea" >
            {(page)=='Profile'?<Login/>:''}
            {(page)=='Leaves'?<Leaves/>:''}
        </div> */}
// navigate('/leaves',{state:employeeid})
    
   // Employeeobj.empid1='714';
   // const employeeid=
   // myInitObject.someProp = 'i am about to get cold'
   // Object.freeze(Employeeobj)

    // var employeeid='vb ';
    //console.log(page);
    // function tologin(){
    //    return <Login/>
    // }
    // function getcontent(){
        
    // }