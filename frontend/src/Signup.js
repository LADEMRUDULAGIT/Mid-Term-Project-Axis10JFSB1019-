import { MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBIcon} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Signup(){
    const navigate = useNavigate();
    const [empid,setempid]=useState('');
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [role,setrole]=useState('');
    const [passwd,setpwd]=useState('');
    const obj={
        empid : empid,
		name :name,
		email:email,
		role:role,
		passwd:passwd
    }
    const register=()=>{
        const urladd=`http://localhost:8095/employee/addemployee`;
        if(empid!=''&&name!=''&&email!=''&&role!=''&&passwd!=''){
           // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           
            var mailformat=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (email.match(mailformat)) {
                axios.post(urladd,obj).then(res=>{
                    alert('Employee added successfully');
                    navigate('/login')
                    
                });
            }
            else{
                alert('innorect email format')
            }
            
        }
        else{
            alert('please fill all credentials..!!!')
        }
        
    }
    return (
        <>
            <MDBContainer fluid  >
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '450px'}}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase" style={{marginTop:'-30px'}}>Employee Signup</h2>
                                <p className="text-white-50 mb-5">Please enter your credentials to Signup!</p>

                                <MDBInput wrapperClass='mb-4 mx-5 w-100'  labelClass='text-white'style={{marginTop:'-10px'}} label='Employee Id'onChange={(e)=>setempid(e.target.value)} id='formControlLg' type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' style={{marginTop:'-10px'}}label='Employee Name' id='formControlLg'onChange={(e)=>setname(e.target.value)} type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' style={{marginTop:'-10px'}}label='Email' id='formControlLg' onChange={(e)=>setemail(e.target.value)}type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' style={{marginTop:'-10px'}}label='Role' id='formControlLg'onChange={(e)=>setrole(e.target.value)} type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' style={{marginTop:'-10px'}} label='Password' onChange={(e)=>setpwd(e.target.value)} value={passwd}id='formControlLg' type='password' size="lg" />

                                <button type="button" className="btn btn-secondary" style={{marginTop:'-30px'}} onClick={register} >Signup</button>

                                <div>
                                    <p className="mb-0">Already Registered !!! Login <Link to="/login" className="text-white-50 fw-bold">Login</Link> </p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    )
}
export default Signup;
//  <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>