import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { setGlobal,getGlobal } from "./globals";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
function Login() {
        const navigate = useNavigate();
        const [uid,setid]=useState('');
        const [pwd,setpwd]=useState('');
        let obj={
                    empid:uid,
                    passwd:pwd
                }
      
       const validate=()=>{
        const urlsearch=`http://localhost:8095/employee/validate`
        if(uid!=''&& pwd!=''){
        axios.post(urlsearch,obj).then(res=>{
            console.log(res.data);
            if(res.data=="valid"){
                navigate('/home')
                if(uid!=null){
                    setGlobal({ empid : uid });
                    //console.log('login',getGlobal("empid"));
                }
            }
            else{
                alert(`Invalid Credentials`)
            }
        })
        .catch((error) => {
                alert(`Invalid Credentials`)
       })
    }
    else{
        alert('fill both fields to login')
    }
    }
    return (
        <>
           <MDBContainer fluid style={{marginTop:'-15px'}}>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '450px'}}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Employee Login</h2>
                                <p className="text-white-50 mb-5">Please enter your credentials to Login!</p>

                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' onChange={(e)=>setid(e.target.value)} value={uid}label='Employee Id' id='formControlLg' type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white'  label='Password' onChange={(e)=>setpwd(e.target.value)} value={pwd}id='formControlLg' type='password' size="lg" />
                                <button type="button" className="btn btn-secondary" onClick={validate} >Login</button>
                                <div>
                                    <p className="mb-0">Not Registered !!! Signup <Link to="/signup" className="text-white-50 fw-bold">Signup</Link> </p>
                                    
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    )
}
export default Login
// import{MDBBtn}from 'mdbsvelte'
// import api from './api.js';
{/* <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
Loginid='formControlLg'
id='formControlLg'
</MDBBtn> */}
  // console.log("error: ", error.message);
                //navigate('/home',{state:uid})

//<p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
//MDBIcon,
   // MDBBtn,
    // < MDBBtn outline className = 'mx-2 px-5' color = 'white' size = 'lg' >
    //     Login
    //                             </MDBBtn >
    // <div className='d-flex flex-row mt-3 mb-5'>
    //     <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //         <MDBIcon fab icon='facebook-f' size="lg" />
    //     </MDBBtn>

    //     <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //         <MDBIcon fab icon='twitter' size="lg" />
    //     </MDBBtn>

    //     <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //         <MDBIcon fab icon='google' size="lg" />
    //     </MDBBtn>
    // </div>

      
        //     const urlsearch=`http://localhost:8095/employee/validate`
        //    axios.post(urlsearch,obj).then(res=>{
        //     console.log(res.data);
        //     navigate('/signup');
        // }).catch((error) => {
        //                 alert(`Invalid Empid : ${uid}`)
        //             // console.log("error: ", error.message);
        // })
          //  const urlsearch=`http://localhost:8095/employee/validate`
    // fetch(urlsearch,{
    //         method:"POST",
    //         body:JSON.stringify(obj),
    //         mode: 'no-cors',
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Access-Control-Allow-Origin":"*"
    //         }
    //     }).then(response=>{return response.text();})
    //     .then((text)=>{
    //         if(text=='valid'){
    //             // alert("login successful");
    //             // pathchg(history);
    //             navigate('/signup');
    //         }
    //         else{
    //             alert("please verify credentials")
    //         }
    //     })
    // }
    // const validate = async () => {
    //     let obj={
    //         empid:uid,
    //         passwd:pwd
    //     }
    //         const urlsearch=`http://localhost:8095/employee/validate`
    //         try{
    //           const response = await api.post(urlsearch,obj);
    //           console.log(response.data);
    //         }
    //         catch(err) {
    //           console.error(err);
    //         }
    //     }