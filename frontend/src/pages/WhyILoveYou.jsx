import React from 'react';
// import ReasonCard from './reasons/ReasonCard';
import { reasons } from '../data/reasons';
import ReasonCard from '../components/reasons/ReasonCard';
// import { reasons } from '../data/reasons';

const WhyILoveYou = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-8 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-8 md:mb-12">
          Why I Love You
        </h2>
        <div className="grid gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyILoveYou;