import React from 'react';
import './Break.css'

const Break = ({handleBreakTime}) => {

    
    return (
        <div className='break'>
            <h4>Add a Break</h4>
            <ul>
                <li onClick={()=>handleBreakTime(20)}><b>20s</b> </li>
                <li onClick={()=>handleBreakTime(30)}><b>30s</b> </li>
                <li onClick={()=>handleBreakTime(40)}><b>40s</b> </li>
                <li onClick={()=>handleBreakTime(50)}><b>50s</b> </li>
            </ul>
        </div>
    );
};

export default Break;