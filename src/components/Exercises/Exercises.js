import React from 'react';
import './Exercises.css'

const Exercises = ({exercise}) => {
    
    const {name,time,picture,id} = exercise
    console.log(name,time,picture,id);
    return (
        <div>
            <div className="exercise-card">
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <h5>Time Required: {time}s</h5>
                <button>Add To List</button>
            </div>
        </div>
    );
};

export default Exercises;