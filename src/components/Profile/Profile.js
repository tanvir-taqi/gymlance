import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'
import Break from '../Break/Break';
import Details from '../Details/Details';

const Profile = ({time}) => {

    const [breakTime,setBreakTime] = useState('')

    const handleBreakTime = (selectedBreakTime)=>{
        
        setBreakTime(selectedBreakTime)
       localStorage.setItem('breakTime',selectedBreakTime)
    }
    return (
        <div className='profile'>
            <div className="profile-user">
                <img src="https://img.freepik.com/free-photo/portrait-muscular-strong-shirtless-male-bodybuilder_171337-4570.jpg?w=740&t=st=1664430784~exp=1664431384~hmac=63d1c603fe04ee7bf43de52c1ec355d416c4baa39d73b89ef64f50a82fe00ec8" alt="" />
                <h4 className="name-address">Tanvir Taqi  <p className='address'><span><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> </span> Pabna,Bangladesh</p></h4>
            </div>
            <div className="profile-credentials">
                <div className="height">
                    <h3>5.5<small>feet</small></h3>
                    <p><b>Height</b></p>
                </div>
                <div className="weight">
                <h3>75<small>kg</small></h3>
                    <p><b>Weight</b></p>
                </div>
                <div className="age">
                <h3>25<small>years</small></h3>
                    <p><b>Age</b></p>
                </div>
            </div>
            <div>
                <Break  handleBreakTime={handleBreakTime}></Break>
            </div>
            <div>
                <Details time={time} breakTime = {breakTime}></Details>
            </div>
        </div>
    );
};

export default Profile;