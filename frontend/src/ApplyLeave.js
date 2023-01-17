import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
import {useState,useEffect} from 'react'
import axios from 'axios'
import { setGlobal, getGlobal } from "./globals";
import Sidebar from './Sidebar';
import {useNavigate} from 'react-router-dom'
function ApplyLeave() {
    const navigate = useNavigate();
    const urladd = `http://localhost:8095/leave/addemployeeleave`;
    const employeeid = getGlobal("empid");
    const getlatestleaveurl = `http://localhost:8095/leave/latestemployeeleave/${employeeid}`;
    const [empid,setempid]=useState('');
    const [name,setname]=useState('');
    const [role,setrole]=useState('');
    const [newleavestatus,setnewleavestatus]=useState('');
    const [status,setstatus]=useState('');
    const [leavetype,setleavetype]=useState('');
    const [fromdate,setfromdate]=useState('');
    const [todate,settodate]=useState('');
    const obj={
        empid : empid,
		name : name,
		leaveType : leavetype,
		fromDate :  fromdate,
		toDate :  todate,
        status: newleavestatus
    }
    useEffect(()=>{
        fetch();
    },[])
    const fetch=()=>{
        const employeeid = getGlobal("empid");
        const urlfetch = `http://localhost:8095/employee/${employeeid}`;
        axios.get(urlfetch).then(res => {
           setempid(res.data.empid)
           setname(res.data.name)
           setrole(res.data.role)
           if(res.data.role=='manager'){
            setnewleavestatus('Accepted')
           }
           getlatestleave();
           
    })
    }
    const getlatestleave=()=>{
        axios.get(getlatestleaveurl).then(res=>{
            setstatus(res.data.status)
        }).catch(function (error) {
            console.log(error.toJSON());
          });
    }
    const applyempleave = () => {
        var d1 = new Date(fromdate);   
        var d2 = new Date(todate); 
        var today=new Date().toISOString().slice(0, 10)
        var todaynew=new Date(today);
        var greaterthantoday=(todaynew.getTime()-d1.getTime())/(1000 * 60 * 60 * 24);
        var diff = d2.getTime() - d1.getTime();
        var daydiff = diff / (1000 * 60 * 60 * 24);   
            if(status=="Pending"){
                alert('your previous leave is on pending state,so you cant able to apply another leave.\nyou can able to update your previous leave')
                navigate('/leaves')
            }
            else if(leavetype==''|| fromdate=='' ||todate==''){
                alert("please fill all details to apply leave..!!!")
            }
            else if(greaterthantoday>0){
                alert("from date should be greater than or equal to today!!!")
            }
            else if(daydiff<0){
                alert("from date should be less than to date..!!!")
            }
            else{
                axios.post(urladd,obj).then(res=>{
                    alert('Leave applied successfully')
                    navigate('/leaves')
                    
                });
            }
    }
    return (
        <>
             <div className="container-fluid" >
                <div className="row flex-nowrap">
                    <Sidebar />
                    <div className="col py-3" style={{background:'lightgray'}}>
                        <MDBContainer fluid style={{ marginTop: '-15px' }}>
                            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                                <MDBCol col='12'>

                                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '1000px', maxHeight: '600px' }}>
                                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style={{ maxHeight: '124px' }}>
                                        <h2 className="fw-bold mb-2 text-uppercase">Apply Leave</h2>
                                            <p className="text-white-50 mb-5">Enter Details</p>
                                        </MDBCardBody>

                                        <MDBCardBody className='p-5 d-flex flex-column  align-items-center mx-auto w-100 hover-scroll-overlay-y' style={{ overflowY: 'auto', scrollbarWidth: '1px' }}>
                                            <MDBRow>
                                                <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='Employee Id'onChange={(e)=>setempid(e.target.value)} value={empid} disabled id='empid' type='text' size="lg" />
                                            
                                                </MDBCol>
                                                <MDBCol col='6'>
                                            <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' label='Employee Name' id='empname' disabled value={name} onChange={(e)=>setname(e.target.value)}type='text' size="lg" />
                                                    
                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                               
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px' }} label='fromDate' value={fromdate} id='fromdate'onChange={(e)=>setfromdate(e.target.value)} type='date' size="lg" />
                                                    
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px' }} label='toDate' value={todate} id='todate'onChange={(e)=>settodate(e.target.value)} type='date' size="lg" />

                                                </MDBCol>
                                            </MDBRow>
                                            <MDBRow>
                                                
                                                <MDBCol col='6'>
                                                    <MDBInput wrapperClass='mb-4 mx-5 w-95' labelClass='text-white' style={{ width: '265px',marginRight:'77px'}}label='Leave Type' id='leavetype' value={leavetype} onChange={(e)=>setleavetype(e.target.value)}type='text' size="lg" />
                                                    
                                                </MDBCol>
                                                <MDBCol col='6'>
                                            <button type="button" className="btn btn-secondary" onClick={applyempleave}  style={{ marginRight:'163px'}}>ApplyLeave</button>

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
export default ApplyLeave;
// useEffect(()=>{
    //     applyleave();
    // },[]);
    
    // function formatdate(s){
    //     const [day, month, year] = s.split('-');
    //     const result = `${year}-${month}-${day}`;
    //     return result;
    // }
    // function reformatDateString(s) {
    //     var b = s.split(/\D/);
    //     return b.reverse().join('-');
    // }
        // console.log(formatdate(obj.fromDate));
        // console.log(reformatDateString(obj.toDate))