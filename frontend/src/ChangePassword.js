import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios'
import { setGlobal, getGlobal } from "./globals";
import Sidebar from './Sidebar';
function ChnagePassword(){
    const urlpasswd = `http://localhost:8095/employee/updatepasswd`;
    
    const [currentpasswd,setcpasswd]=useState('');
    const [updatedpasswd,setupdatedpasswd]=useState('');
    const [confirmpasswd,setconfirmpasswd]=useState('');
    const [reppasswd,setreppasswd]=useState('')
    const employeeid = getGlobal("empid");
    const empurl=`http://localhost:8095/employee/${employeeid}`;
    useEffect(()=>{
        getemployee();
    },[])
const obj={
    empid:employeeid,
    passwd:updatedpasswd
}

const getemployee=()=>{
    axios.get(empurl).then(res=>{
        console.log(res.data);
        setreppasswd(res.data.passwd);
        
    }).catch(function (error) {
        console.log(error.toJSON());
      });
}

   const setpasswd=()=>{
    axios.post(urlpasswd,obj).then(res=>{
        console.log(res.data);
        alert('password updated successfully')
    }).catch(function (error) {
        console.log(error.toJSON());
      });
   }

    const changepasswd=()=>{
        let msg=''
        if(currentpasswd.trim()==''||updatedpasswd.trim()==''||confirmpasswd.trim()==''){
            msg=msg+'->password should not be null\n';
        }
        if(reppasswd!=currentpasswd){
            msg=msg+'->current password is not valid.\n->you can update password if you know current password correctly.\n';
        }
        if(updatedpasswd!=confirmpasswd){
            msg=msg+'->new password and confirm password should be same\n';
        }
        if(currentpasswd==updatedpasswd){
            msg=msg+'->current password and updating password should be different';
        }
        if(msg.length>0){
            alert(msg)
        }
        else{
            setpasswd()
        }
        
    }
    const cancel=()=>{
            setcpasswd('')
            setupdatedpasswd('')
            setconfirmpasswd('')
    }
    return(
    <>
    <div className="container-fluid" >
        <div className="row flex-nowrap">
            <Sidebar />
            <div class="col py-3" style={{background:'lightgray'}}>
                <MDBContainer fluid style={{ marginTop: '-15px' }}>
                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>

                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '450px', maxHeight: '600px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style={{ maxHeight: '124px' }}>
                                    <h2 className="fw-bold mb-2 text-uppercase">Change Password</h2>
                                </MDBCardBody>

                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='Current password' value={currentpasswd} onChange={(e)=>setcpasswd(e.target.value)} id='cpasswd' type='text' size="lg" />
                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='New password' value={updatedpasswd} onChange={(e)=>setupdatedpasswd(e.target.value)} id='npasswd' type='text' size="lg" />
                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='Confirm Password' value={confirmpasswd} onChange={(e)=>setconfirmpasswd(e.target.value)}id='cnpasswd' type='text' size="lg" />
                                    {/* <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '239px' }} label='fromDate' id='fromdate' type='date' size="lg" /> */}
                                    <div>
                                    <button type="button" className="btn btn-secondary" onClick={changepasswd} style={{marginRight:'100px'}}>change password</button>
                                    <button type="button" className="btn btn-secondary" onClick={cancel} >Cancel</button>
                                    </div>
                                    
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        </div></div>

</>);
}
export default ChnagePassword;