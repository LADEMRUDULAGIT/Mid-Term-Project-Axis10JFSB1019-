import {useEffect,React, useState } from 'react'
import { getGlobal } from "./globals";
import Sidebar from './Sidebar';
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';
import { Link ,useNavigate} from 'react-router-dom';

function Profile(){
        const navigate = useNavigate();
       // const [profile,setprofile]=useState([])
        const [empid,setempid]=useState('');
        const [name,setname]=useState('');
        const [email,setemail]=useState('');
        const [role,setrole]=useState('');
        const [leaveCount,setleaveCount]=useState('');
        const refresh=()=>{
            navigate('/refresh',{state:"profile"});
        }
    useEffect(()=>{
        fetch();
    },[])
    const fetch=()=>{
        const employeeid = getGlobal("empid");
        
        const urlfetch = `http://localhost:8095/employee/${employeeid}`;
        axios.get(urlfetch).then(res => {
           setempid(res.data.empid)
           setemail(res.data.email)
           setname(res.data.name)
           setleaveCount(res.data.leaveCount)
           setrole(res.data.role)
           
    })
    }
    const leaves=()=>{
        navigate('/leaves');
    }
    return (

        <div className="container-fluid" >
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col py-3" style={{ display: 'flex', justifyContent: 'center',background:'lightgray' }}>
                    <MDBContainer fluid >
                        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                            <MDBCol col='12'>
                                <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '850px' }}>
                                    <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                        <h2 className="fw-bold mb-2 text-uppercase">Employee Profile</h2>
                                        <button type="button" className="btn btn-secondary"  style={{marginLeft:"600px"}}   onClick={refresh}>refresh</button>

                                       
                                        <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                            <div>
                                                <p className="mb-2 h5">Employee ID</p>
                                                <p className="text-muted mb-0">{empid}&emsp;</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="mb-2 h5">Name</p>
                                                <p className="text-muted mb-0">{name}&emsp;</p>
                                            </div>
                                            <div>
                                                <p className="mb-2 h5">Email</p>
                                                <p className="text-muted mb-0">{email}&emsp;&emsp;</p>
                                            </div>
                                            <div>
                                                <p className="mb-2 h5">Role</p>
                                                <p className="text-muted mb-0">{role}&emsp;</p>
                                            </div>
                                            <div>
                                                <p className="mb-2 h5">leaveCount</p>
                                                <p className="text-muted mb-0">{leaveCount}</p>
                                            </div>
                                        </div>

                                        <button type="button" className="btn btn-secondary btn-rounded btn-lg" onClick={leaves}>
                                            check leaves
                                        </button>
                                    </MDBCardBody>
                                </MDBCard>

                            </MDBCol>
                        </MDBRow>

                    </MDBContainer>
                </div>
            </div>
        </div>


    )
}
export default Profile;
{/* <section class="vh-100" style="background-color: #eee;">
<div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-12 col-xl-4">

            <div class="card" style="border-radius: 15px;">
                <div class="card-body text-center">
                    <div class="mt-3 mb-4">
                        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                            class="rounded-circle img-fluid" style="width: 100px;" /> 
                    </div>
                    <h4 class="mb-2">Julie L. Arsenault</h4>
                    <p class="text-muted mb-4">@Programmer <span class="mx-2">|</span> <a
                        href="#!">mdbootstrap.com</a></p>
                    <div class="mb-4 pb-2">
                        <button type="button" class="btn btn-outline-primary btn-floating">
                            <i class="fab fa-facebook-f fa-lg"></i>
                        </button>
                        <button type="button" class="btn btn-outline-primary btn-floating">
                            <i class="fab fa-twitter fa-lg"></i>
                        </button>
                        <button type="button" class="btn btn-outline-primary btn-floating">
                            <i class="fab fa-skype fa-lg"></i>
                        </button>
                    </div>
                    <button type="button" class="btn btn-primary btn-rounded btn-lg">
                        Message now
                    </button>
                    <div class="d-flex justify-content-between text-center mt-5 mb-2">
                        <div>
                            <p class="mb-2 h5">8471</p>
                            <p class="text-muted mb-0">Wallets Balance</p>
                        </div>
                        <div class="px-3">
                            <p class="mb-2 h5">8512</p>
                            <p class="text-muted mb-0">Income amounts</p>
                        </div>
                        <div>
                            <p class="mb-2 h5">4751</p>
                            <p class="text-muted mb-0">Total Transactions</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</section> */}