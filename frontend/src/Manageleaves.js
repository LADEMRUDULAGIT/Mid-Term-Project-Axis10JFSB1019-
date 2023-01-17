import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { React, useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
// import { browserHistory } from 'react-router-dom';
import { getGlobal } from "./globals";
import Sidebar from './Sidebar';
import {useNavigate} from 'react-router-dom'
//import { useFocusEffect } from '@react-navigation/native'
function Manageleaves() {
    const navigate = useNavigate();
    const employeeid = getGlobal("empid");
    const [leaves, setleaves] = useState([]);
    const refresh=()=>{
        navigate('/refresh',{state:"manageleave"});
    }
    useEffect(()=>{
        fetch();
    },[])
    const fetch=()=>{
        const urlfetch = `http://localhost:8095/leave/allemployeeleaves`;
        axios.get(urlfetch).then(res => {
            setleaves(res.data)
           // console.log(res.data)
    })
    }
    const getb=(leave)=>{
        if(leave.status=='Pending'){
            return (<td><button type="button" className="btn btn-secondary" onClick={()=>acceptleave(leave)} >Accept</button>
            <button type="button" className="btn btn-secondary" onClick={()=>rejectleave(leave)} style={{marginLeft:'100px'}} >Reject</button></td>);
        }
        else{
            return (<td></td>);
        }
    }
    const acceptleave=(leave)=>{
        const accepturl=`http://localhost:8095/leave/acceptleave/${leave.empid}`;
        axios.put(accepturl).then(res=>{
            console.log(res.data);
            alert('Leave accepted successfully')
            //navigate('/compfornavigate')
            navigate('/refresh',{state:"manageleave"});
        });

    }
    const rejectleave=(leave)=>{
        const accepturl=`http://localhost:8095/leave/rejectleave/${leave.empid}`;
        axios.put(accepturl).then(res=>{
            console.log(res.data);
            alert('Leave rejected successfully')
           // navigate('/compfornavigate')
           navigate('/refresh',{state:"manageleave"});
        });
    }
    return (
        <>
            <div className="container-fluid" >
                <div className="row flex-nowrap">
                    <Sidebar />
                    <div className="col py-3"style={{display:'flex',justifyContent:'center',background:'lightgray'}} >
                        <MDBContainer fluid style={{ marginTop: '-15px' }}>
                            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                                <MDBCol col='12'  style={{marginLeft:'125px'}}>
                                    <MDBCard className='bg-dark text-white my-5  mx-auto' style={{ borderRadius: '1rem' }}>
                                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style={{ maxHeight: '124px' }}>
                                            <h2 className="fw-bold mb-2 text-uppercase">Manage Leaves</h2>
                                            <button type="button" className="btn btn-secondary"  style={{marginLeft:"820px"}}   onClick={refresh}>refresh</button>
                                        </MDBCardBody>
                                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100 hover-scroll-overlay-y' style={{ overflowY: 'auto', scrollbarWidth: '1px' }}>
                                            <table className="table table-sm table-dark" style={{alignSelf:'center',borderRadius:'4px',width:'900px'}}>

                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Leave Type</th>
                                                        <th>From Date</th>
                                                        <th>To Date</th>
                                                        <th>Status</th>
                                                        <th style={{textAlign:'center'}}>Action</th>
                                                        
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                    {leaves.map((l, i) => <tr><td>{l.empid}</td>
                                                        <td >{l.name}</td>
                                                        <td>{l.leaveType}</td>
                                                        <td>{l.fromDate}</td>
                                                        <td>{l.toDate}</td>
                                                        <td>{l.status}</td>
                                                        {getb(l)}
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
export default Manageleaves;