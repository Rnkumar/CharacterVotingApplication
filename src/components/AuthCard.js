import React,{useState} from 'react';
import {Login,SignUp} from './LoginSignUp';
import ReactCardFlip from 'react-card-flip';

export default () => {

    const [checked,setChecked] = useState(false);

    const handleChange= ()=>{
      setChecked(prev=>!prev)
    }

    return (
        <ReactCardFlip isFlipped={checked} flipDirection="horizontal" flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.8}>
            <Login handleChange={handleChange} key="front"/>
            <SignUp handleChange={handleChange} key="back"/>
        </ReactCardFlip>
    )
}
