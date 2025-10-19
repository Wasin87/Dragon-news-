import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-2'>
            <p className='text-base-100 bg-secondary px-3 py-2 rounded-xl'>Latest</p>

        <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
         

            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero molestiae cum dignissimos facilis?</p>

            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero molestiae cum dignissimos facilis?</p>

 
        </Marquee>


        </div>
    );
};

export default LatestNews;