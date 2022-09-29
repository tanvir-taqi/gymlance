import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css'

const Details = ({ time, breakTime }) => {
    let totalTime = 0
    let newTotalTime
    for (const e of time) {
        totalTime = totalTime + e;
    }
    if (totalTime >= 60) {
        const min = Math.floor(totalTime / 60)
        const sec = totalTime % 60
        newTotalTime = min + ':' + sec + 'sec';
    } else {
        newTotalTime = totalTime + 'sec'
    }

    const prevBreakTime = localStorage.getItem('breakTime')
    if (prevBreakTime) {
        breakTime = prevBreakTime
    }
    const  handleToast = ()=>{
        toast('Congratulations!! Get Rest Now!!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }


    return (
        <div>
            <h3>Exercise Details</h3>
            <div>

                <div className="detail-time-exercise">
                    <h4>Exercise Time:</h4>
                    <h4> {newTotalTime}</h4>
                </div>
                <div className="detail-time-break">
                    <h4>Break Time: </h4>
                    <h4>{breakTime ? breakTime : 0}sec</h4>
                </div>

                    <ToastContainer></ToastContainer>
                <button className='complete-btn' onClick={handleToast}>Activity Completed</button>
            </div>

        </div>
    );
};

export default Details;