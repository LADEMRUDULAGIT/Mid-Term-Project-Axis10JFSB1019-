import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { setGlobal, getGlobal } from "./globals";
import Sidebar from './Sidebar';
function UpdateLeave() {
    const navigate = useNavigate();
    const [empid,setempid]=useState('');
    const [name,setname]=useState('');
    const [leavetype,setleavetype]=useState('');
    const [fromdate,setfromdate]=useState('');
    const [todate,settodate]=useState('');
    const [status,setstatus]=useState('');
    const employeeid = getGlobal("empid");
    const latestleaveurl=`http://localhost:8095/leave/latestemployeeleave/${employeeid}`;
    const obj={
        empid : empid,
		name : name,
		leaveType : leavetype,
		fromDate :  fromdate,
		toDate :  todate,
        status:status
    }

    useEffect(()=>{
        getlatestleave();
    },[])
    const getlatestleave=()=>{
        axios.get(latestleaveurl).then(res=>{
            console.log(res.data);
            setempid(res.data.empid)
            setname(res.data.name)
            setstatus(res.data.status)
            setleavetype(res.data.leaveType)
            setfromdate(res.data.fromDate)
            settodate(res.data.toDate)
            
        }).catch(function (error) {
            console.log(error.toJSON());
          });
    }

    const urlupdate = `http://localhost:8095/leave/update/employeeleave/${empid}`;
    const updateempleave = () => {
        var d1 = new Date(fromdate);   
        var d2 = new Date(todate); 
        var today=new Date().toISOString().slice(0, 10)
        var todaynew=new Date(today);
        var greaterthantoday=(todaynew.getTime()-d1.getTime())/(1000 * 60 * 60 * 24);

        var diff = d2.getTime() - d1.getTime();
        var daydiff = diff / (1000 * 60 * 60 * 24);   
        console.log('updateleave', employeeid)
        if(leavetype==''|| fromdate=='' ||todate==''){
            alert("please fill all details to update leave..!!!")
        }
        else if(greaterthantoday>0){
            alert("from date should be greater than or equal to today!!!")
        }
        else if(daydiff<0){
            alert("from date should be less than to date..!!!")
        }
        else{
            axios.put(urlupdate,obj).then(res=>{
                console.log(res.data);
                alert('Leave updated successfully')
                navigate('/leaves')
            });
        }
        
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
                                       
                                       <h2 className="fw-bold mb-2 text-uppercase">Update Leave</h2>
                                            {/* <p className="text-white-50 mb-5">Update Details</p> */}
                                        </MDBCardBody>

                                        <MDBCardBody className='p-5 d-flex flex-column  align-items-center mx-auto w-100 hover-scroll-overlay-y' style={{ overflowY: 'auto', scrollbarWidth: '1px' }}>
                                            <MDBRow>
                                                <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='Employee Id'onChange={(e)=>setempid(e.target.value)} value={empid} disabled id='empid' type='text' size="lg" />
                                                
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='Employee Name' id='empname' onChange={(e)=>setname(e.target.value)} disabled value={name} type='text' size="lg" />

                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                               
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px' }} label='fromDate' id='fromdate'onChange={(e)=>setfromdate(e.target.value)} value={fromdate} type='date' size="lg" />

                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px' }} label='toDate' id='todate'onChange={(e)=>settodate(e.target.value)} value={todate} type='date' size="lg" />

                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px',marginRight:'77px'}}label='Leave Type' id='leavetype' onChange={(e)=>setleavetype(e.target.value)} value={leavetype} type='text' size="lg" />
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <button type="button" className="btn btn-secondary" onClick={updateempleave} style={{ marginRight:'163px'}}>Update Leave</button>
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
export default UpdateLeave;