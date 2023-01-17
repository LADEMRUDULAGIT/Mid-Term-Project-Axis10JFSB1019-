import React, { useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Refresh(){
    const navigate = useNavigate();
    const path=useLocation().state;
    useEffect(()=>{
        clickElement();
    },[])
    const clickElement = () => {
        navigate(`/${path}`)
    }
    
    return (
        <div>
            <button onClick={clickElement}>
                Trigger click inside input
            </button>
            
        </div>
    );
   
}

export default Refresh;
