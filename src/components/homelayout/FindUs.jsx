import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
          <h2 className='font-bold mb-5'>Find Us On</h2>
          <div className=''>
            <button className="btn bg-base-100 btn-soft w-full justify-start"><FaFacebook></FaFacebook> Facebook</button>
            <button className="btn bg-base-100 btn-soft w-full justify-start"><FaTwitter></FaTwitter> Twitter</button>
            <button className="btn bg-base-100 btn-soft w-full justify-start"><FaInstagram></FaInstagram> Instagram</button>
          </div>
        </div>
    );
};

export default FindUs;