'use client';
/* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueNetwork from '@/components/ValueNetwork';

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const targetRef = useRef(null);

  const handleClickOutside = (event) => {
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      setActiveIndex(-1);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <main className="min-w-full">
        <Header />
        <Hero />
        <ValueNetwork
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          targetRef={targetRef}
        />
      </main>
    </>
  );
};

export default Index;
