import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import ClassImg from '../../assets/class.png';
import play from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone </h2>
            <div className='space-y-3'>
                <img src={swimmingImg} alt="" />
                <img src={ClassImg} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default Qzone;