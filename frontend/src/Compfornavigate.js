import React, { useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
function Compfornavigate(){
    const navigate = useNavigate();
    useEffect(()=>{
        clickElement();
    },[])
    const clickElement = () => {
        navigate('/manageleave')
    }
    
    return (
        <div>
            <button onClick={clickElement}>
                Trigger click inside input
            </button>
            
        </div>
    );
   
}

export default Compfornavigate;

 // const tomanage=()=>{
    //     navigate("/manageleave")
    // }
    
    // handleClick = (e) => {
    //     this.inputElement.click();
    //     navigate("/manageleave")
    //   }
    // return (
    //     <div onClick={this.handleClick}>
    //       <input ref={input => this.inputElement = input} />
    //     </div>
    //   );