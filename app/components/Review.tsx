import React from 'react';
import SectionHeading from './SectionHeading';
import Slider from './Slider';

const Review = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading>Review Client</SectionHeading>
        <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
            {/* Slider */}
            <Slider />
        </div>
    </div>
  );
};

export default Review;