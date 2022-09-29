
import React, { useEffect, useState } from 'react';
import Exercises from '../Exercises/Exercises';
import Profile from '../Profile/Profile';
import './Home.css'

const Home = () => {
    const [exercises, setExercises] = useState([])
    const [times,setTime] = useState('')
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    const handlePracticeTime = (time)=>{
        const newTime = [...times,time]
    setTime(newTime)

    }

    return (
        <div className='home-container'>
            <h4>Select Today's Exercise</h4>
            <div className='main-container'>
                <div className="exercises-container">
                    {
                        exercises.map(exercise => <Exercises
                            key={exercise.id} 
                            exercise={exercise}
                            handleTime={handlePracticeTime}></Exercises>)
                    }
                    
                </div>
                <div className="profile-container">
                    <Profile time={times}></Profile>
                </div>
            </div>
        </div>
    );
};

export default Home;