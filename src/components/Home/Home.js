
import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import './Home.css'

const Home = () => {
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='home-container'>
            <h4>Select Today's Exercise</h4>
            <div className='main-container'>
                <div className="exercises-container">
                    {
                        exercises.map(exercise => <Exercises exercise={exercise}></Exercises>)
                    }
                    
                </div>
                <div className="profile-container">
                    <h3>Profile</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;