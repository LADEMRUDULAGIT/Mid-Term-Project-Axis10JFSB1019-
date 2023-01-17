import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { setGlobal, getGlobal } from "./globals";
import {useNavigate} from 'react-router-dom'
import Sidebar from './Sidebar';
function RevokeLeave() {
    const navigate = useNavigate();
    const [empid, setempid] = useState('');
    const [name, setname] = useState('');
    const [leavetype, setleavetype] = useState('');
    const [fromdate, setfromdate] = useState('');
    const [todate, settodate] = useState('');
    const employeeid = getGlobal("empid");
    const latestleaveurl = `http://localhost:8095/leave/latestemployeeleave/${employeeid}`;
    const obj = {
        empid: empid,
        name: name,
        leaveType: leavetype,
        fromDate: fromdate,
        toDate: todate,
    }

    useEffect(() => {
        getlatestleave();
    }, [])
    const getlatestleave = () => {
        axios.get(latestleaveurl).then(res => {
            setempid(res.data.empid)
            setname(res.data.name)
            setleavetype(res.data.leaveType)
            setfromdate(res.data.fromDate)
            settodate(res.data.toDate)

        }).catch(function (error) {
            console.log(error.toJSON());
        });
    }
    const urlrevoke = `http://localhost:8095/leave/delete/employeeleave/${empid}`;
    const revokeleavelatest = () => {
        axios.delete(urlrevoke).then(res => {
            console.log(res.data);
            alert('Leave revoked successfully')
            navigate('/leaves')

        });
    }
    return (
        <>
            <div className="container-fluid" >
                <div className="row flex-nowrap">
                    <Sidebar />
                    <div class="col py-3" style={{background:'lightgray'}}>
                        <MDBContainer fluid style={{ marginTop: '-15px' }}>
                            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                                <MDBCol col='12'>

                                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '1000px', maxHeight: '600px' }}>
                                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style={{ maxHeight: '124px' }}>
                                            <h2 className="fw-bold mb-2 text-uppercase">Revoke Leave</h2>
                                            {/* <p className="text-white-50 mb-5">Update Details</p> */}
                                        </MDBCardBody>

                                        <MDBCardBody className='p-5 d-flex flex-column  align-items-center mx-auto w-100 hover-scroll-overlay-y' style={{ overflowY: 'auto', scrollbarWidth: '1px' }}>
                                            <MDBRow>
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='Employee Id' onChange={(e) => setempid(e.target.value)} value={empid} disabled id='empid' type='text' size="lg" />
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='Employee Name' id='empname' onChange={(e) => setname(e.target.value)} disabled value={name} type='text' size="lg" />
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                               
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px' }} label='fromDate' id='fromdate' onChange={(e) => setfromdate(e.target.value)} disabled value={fromdate} type='date' size="lg" />

                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px' }} label='toDate' id='todate' onChange={(e) => settodate(e.target.value)} value={todate} disabled type='date' size="lg" />

                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px',marginRight:'77px'}}label='Leave Type' id='leavetype' onChange={(e) => setleavetype(e.target.value)} disabled value={leavetype} type='text' size="lg" />

                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <button type="button" className="btn btn-secondary" onClick={revokeleavelatest} style={{ marginRight:'163px'}}>Revoke Leave</button>

                                                </MDBCol></MDBRow>

                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBCol>
                            </MDBRow>

                        </MDBContainer>
                    </div>
                </div></div>

        </>
    )
}
export default RevokeLeave;