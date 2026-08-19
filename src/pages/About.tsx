import React from 'react';
import { OurValues } from '../features/about/sections/OurValues';
import OurValuedClients from '../features/about/sections/OurValuedClients';

export const About: React.FC = () => {
  return (
    <main className="bg-[#141414] min-height-screen">
      <OurValues />
      <OurValuedClients />
    </main>
  );
};

export default About;