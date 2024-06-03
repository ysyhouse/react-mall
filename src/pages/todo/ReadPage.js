import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function ReadPage(props) {
    
    const {tno}=useParams();

    const Navigate =useNavigate()

    const moveToModify = useCallback((tno)=>{
        Navigate({pathname:`/todo/modify/${tno}`})
    },[tno])
    
    return (
        <div className='text-3xl font-extrabold'>
            todo read page component {tno}
        <div>
        <button onClick={()=>moveToModify(33)}>Test Modify</button>
        </div>
        </div>
    );
}

export default ReadPage;