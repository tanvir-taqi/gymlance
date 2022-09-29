import React from 'react';

const Details = ({time,breakTime}) => {
let totalTime = 0
let newTotalTime
for(const e of time){
    totalTime = totalTime + e ; 
}  
if(totalTime >=60){
    const min  = Math.floor(totalTime / 60)
    const sec = totalTime % 60
    newTotalTime = min +':'+sec +'sec';
}else{
    newTotalTime = totalTime + 'sec'
}

const prevBreakTime = localStorage.getItem('breakTime')
if(prevBreakTime){
    breakTime = prevBreakTime
}


    return (
        <div>
            <h3>Exercise Details</h3>
            <h4>Exercise Time:<span> {newTotalTime}</span></h4>
            <h4>Break Time: <span>{breakTime?breakTime:0}sec</span></h4>
            <button>Activity Completed</button>
            
        </div>
    );
};

export default Details;