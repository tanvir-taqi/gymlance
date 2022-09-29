import React from 'react';
import './Exercises.css'

const Exercises = ({exercise,handleTime}) => {
    
    const {name,time,picture,id} = exercise
    
    return (
        <div>
            <div className="exercise-card">
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <h5>Time Required: {time}s</h5>
                <button onClick={()=>handleTime(time)}>Add To List</button>
            </div>
        </div>
    );
};

export default Exercises;