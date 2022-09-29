import React from 'react';
import './Break.css'

const Break = ({handleBreakTime}) => {

    
    return (
        <div className='break'>
            <h4>Add a Break</h4>
            <ul>
                <li onClick={()=>handleBreakTime(20)}>20s</li>
                <li onClick={()=>handleBreakTime(30)}>30s</li>
                <li onClick={()=>handleBreakTime(40)}>40s</li>
                <li onClick={()=>handleBreakTime(50)}>50s</li>
            </ul>
        </div>
    );
};

export default Break;