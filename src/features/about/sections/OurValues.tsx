import React from 'react';
import { Container } from '../../../components/shared/Container';
import { ValueCard, type ValueItem } from '../components/ValueCard';

const VALUES_DATA: ValueItem[] = [
  {
    id: '1',
    title: 'Trust',
    description: 'Trust is the cornerstone of every successful real estate transaction.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Excellence',
    description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 15.39l-3.76 2.27 1-4.28-3.32-2.88 4.38-.37L12 6.09l1.7 4.04 4.38.37-3.32 2.88 1 4.28z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Client-Centric',
    description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Our Commitment',
    description: 'We are dedicated to providing you with the highest level of service, professionalism.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export const OurValues: React.FC = () => {
  return (
    <section className="w-full bg-[#141414] py-[80px] xl:py-[100px]">
      <Container className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[60px] items-start">
        
        {/* Left Side: Text Container (خارج الإطار الرمادي) */}
        <div className="w-full lg:w-[413px] flex flex-col gap-3.5 shrink-0 pt-2">
          <div className="flex items-center gap-1 text-[#703BF7]">
            <span className="text-xl">✦</span>
            <span className="text-sm">✦</span>
          </div>
          
          <h2 className="text-[38px] font-semibold text-white font-['Urbanist'] leading-[120%]">
            Our Values
          </h2>
          <p className="text-[#999999] text-[16px] font-normal font-['Urbanist'] leading-[150%]">
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
          </p>
        </div>

        {/* Right Side: الإطار الرمادي الحاضن للكروت الأربعة فقط */}
        <div className="flex-1 bg-[#262626] border border-[#262626] rounded-[16px] p-[10px] grid grid-cols-1 md:grid-cols-2 gap-[10px] overflow-hidden">
          <ValueCard {...VALUES_DATA[0]} />
          <ValueCard {...VALUES_DATA[1]} />
          <ValueCard {...VALUES_DATA[2]} />
          <ValueCard {...VALUES_DATA[3]} />
        </div>

      </Container>
    </section>
  );
};

export default OurValues;