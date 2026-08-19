import React, { useState } from 'react';
import { Container } from '../../../components/shared/Container';
import { ValuedClientCard } from '../components/ValuedClientCard';
import type { ClientItem } from '../../../types/client';

const CLIENTS_DATA: ClientItem[] = [
  {
    id: '1',
    establishedYear: '2019',
    companyName: 'ABC Corporation',
    domain: 'Commercial Real Estate',
    category: 'Luxury Home Development',
    testimonial:
      'Estatein\'s expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.',
  },
  {
    id: '2',
    establishedYear: '2018',
    companyName: 'GreenTech Enterprises',
    domain: 'Commercial Real Estate',
    category: 'Retail Space',
    testimonial:
      'Estatein\'s ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.',
  },
  {
    id: '3',
    establishedYear: '2020',
    companyName: 'Nexus Logistics',
    domain: 'Industrial Real Estate',
    category: 'Warehouse Space',
    testimonial:
      'Their team found us an ideal distribution hub in record time. Excellent communication and market knowledge throughout.',
  },
  {
    id: '4',
    establishedYear: '2017',
    companyName: 'Apex Capital',
    domain: 'Commercial Real Estate',
    category: 'Office Towers',
    testimonial:
      'Professionalism at its finest. Estatein provided top-tier options that matched our exact investment criteria.',
  },
  {
    id: '5',
    establishedYear: '2021',
    companyName: 'Urban Living Co.',
    domain: 'Residential Real Estate',
    category: 'Multi-Family Housing',
    testimonial:
      'A seamless experience from start to finish. They handled every detail with extreme precision and care.',
  },
  {
    id: '6',
    establishedYear: '2016',
    companyName: 'Vanguard Properties',
    domain: 'Commercial Real Estate',
    category: 'Mixed-Use Developments',
    testimonial:
      'Working with Estatein transformed our acquisition strategy. Highly recommended for commercial investments.',
  },
  {
    id: '7',
    establishedYear: '2022',
    companyName: 'Horizon Healthcare',
    domain: 'Specialized Real Estate',
    category: 'Medical Facilities',
    testimonial:
      'Navigating healthcare facility requirements is tough, but Estatein simplified the entire process effortlessly.',
  },
  {
    id: '8',
    establishedYear: '2015',
    companyName: 'Starlight Hospitality',
    domain: 'Commercial Real Estate',
    category: 'Hotel & Resort Spaces',
    testimonial:
      'Their market insights gave us a distinct competitive advantage when launching our latest hotel location.',
  },
  {
    id: '9',
    establishedYear: '2023',
    companyName: 'Nova Technologies',
    domain: 'Commercial Real Estate',
    category: 'Tech Campus Spaces',
    testimonial:
      'Estatein located a modern, scalable space that perfectly suits our rapid team expansion and culture.',
  },
  {
    id: '10',
    establishedYear: '2014',
    companyName: 'Pioneer Holdings',
    domain: 'Commercial Real Estate',
    category: 'Corporate Headquarters',
    testimonial:
      'An outstanding agency that consistently delivers results above and beyond expectations. A long-term partner for us.',
  },
];

export const OurValuedClients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = CLIENTS_DATA.length - 2;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const formattedCurrentIndex = String(currentIndex + 1).padStart(2, '0');

  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#141414] py-10 sm:py-16 xl:py-[100px] text-white overflow-hidden">
      <Container className="flex flex-col gap-8 sm:gap-12 xl:gap-[80px]">
        
        <div className="flex flex-col gap-3 sm:gap-[14px] max-w-full xl:max-w-[1297px]">
          <h2 className="text-2xl sm:text-3xl xl:text-[38px] font-semibold text-white leading-tight">
            Our Valued Clients
          </h2>
          <p className="text-[#999999] text-xs sm:text-sm xl:text-[18px] font-medium leading-relaxed sm:leading-[150%] max-w-3xl xl:max-w-none">
            At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6 xl:gap-[50px]"
            style={{
              transform: `translateX(calc(-${currentIndex} * (50% + 25px)))`,
            }}
          >
            {CLIENTS_DATA.map((client) => (
              <div
                key={client.id}
                className="w-full lg:w-[calc(50%-25px)] flex-shrink-0 flex"
              >
                <ValuedClientCard {...client} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-[20px] border-t border-[#262626] w-full">
          <span className="text-[#999999] text-base xl:text-[20px] font-medium leading-[150%]">
            <strong className="text-white font-medium">{formattedCurrentIndex}</strong> of {CLIENTS_DATA.length}
          </span>
          
          <div className="flex items-center gap-[10px]">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-[58px] h-[58px] rounded-full bg-[#1A1A1A] border border-[#262626] text-[#999999] flex items-center justify-center transition-all p-[14px] ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:text-white hover:border-[#703BF7] cursor-pointer'
              }`}
            >
              <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-[58px] h-[58px] rounded-full bg-[#1A1A1A] border border-[#262626] text-[#999999] flex items-center justify-center transition-all p-[14px] ${
                currentIndex >= maxIndex
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:text-white hover:border-[#703BF7] cursor-pointer'
              }`}
            >
              <svg className="w-[30px] h-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default OurValuedClients;