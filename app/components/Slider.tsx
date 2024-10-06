'use client';
import { clientReviews } from '@/Data/data';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

const Slider = () => {
  return (
    <Carousel
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={2300}
    infinite
    responsive={responsive}
    >
        {clientReviews.map((review) => {
            return (
                <div key={review.image}>
                    {/* Review card */}
                    <ReviewCard review={review} />
                </div>
            );
        })}
    </Carousel>
  );
};

export default Slider;
