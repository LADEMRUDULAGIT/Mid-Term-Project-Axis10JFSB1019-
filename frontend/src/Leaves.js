import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { React, useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { getGlobal } from "./globals";
import Sidebar from './Sidebar';
//import { useFocusEffect } from '@react-navigation/native'
function Leaves() {
    const navigate = useNavigate();
    const [leaves, setleaves] = useState([]);
    useEffect(()=>{
        fetch();
    },[])
    const refresh=()=>{
        navigate('/refresh',{state:"leaves"});
    }
    const fetch=()=>{
        const employeeid = getGlobal("empid");
        const urlfetch = `http://localhost:8095/leave/getemployeeleavebyid/${employeeid}`;
        axios.get(urlfetch).then(res => {
            setleaves(res.data)
           // console.log(res.data)
    })
    }
    return (
        <>
            <div className="container-fluid" >
                <div className="row flex-nowrap">
                    <Sidebar />
                    <div className="col py-3"style={{display:'flex',justifyContent:'center',background:'lightgray'}} >
                        <MDBContainer fluid style={{ marginTop: '-15px' }}>
                            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                                <MDBCol col='12' style={{marginLeft:'50px'}}>
                                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem' }}>
                                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style={{ maxHeight: '124px' }}>
                                            <h2 className="fw-bold mb-2 text-uppercase">My Leaves</h2>
                                            <button type="button" className="btn btn-secondary"  style={{marginLeft:"915px"}}   onClick={refresh}>refresh</button>
                                        </MDBCardBody>
                                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100 hover-scroll-overlay-y' style={{ overflowY: 'auto', scrollbarWidth: '1px' }}>
                                            <table className="table table-sm table-dark" style={{alignSelf:'center',borderRadius:'4px',width:'1000px'}}>

                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Leave Type</th>
                                                        <th>From Date</th>
                                                        <th>To Date</th>
                                                        <th>Status</th>
                                                        <th>Update</th>
                                                        <th>Revoke</th>
                                                        
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                    {leaves.map((l, i) => <tr><td>{l.empid}</td>
                                                        <td >{l.name}</td>
                                                        <td>{l.leaveType}</td>
                                                        <td>{l.fromDate}</td>
                                                        <td>{l.toDate}</td>
                                                        <td>{l.status}</td>
                                                        {l.status=='Pending' ? <td><Link to='/updateleave'><button type="button" className="btn btn-secondary">update</button></Link></td> : <td>-</td>}
                                                        {l.status=='Pending' ? <td><Link to='/revokeleave'><button type="button" className="btn btn-secondary">revoke</button></Link></td> : <td>-</td>}
                                                    </tr>)}
                                                </tbody>
                                            </table>
                                        </MDBCardBody>
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
export default Leaves;