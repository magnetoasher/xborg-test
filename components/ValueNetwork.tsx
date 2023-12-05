import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NewGaming from './NewGaming';
import { NewGamingProps } from 'types/newGamingProps';

const ValueNetwork: React.FC<NewGamingProps> = ({
  activeIndex,
  setActiveIndex,
  targetRef,
}) => {
  return (
    <section
      id="content"
      style={{ position: 'relative' }}
      className="w-[90%] pt-4 mx-auto min-h-screen relative bg-transparent"
    >
      <div className="mb-[8vh] bg-transparent" style={{ position: 'relative' }}>
        <Image
          className="absolute z-[-1] left-[-7%] bg-transparent top-0 pointer-events-none"
          src="/assets/img/bubble2-1.svg"
          alt="Animate Frame"
          width={90}
          height={90}
          style={{ objectFit: 'contain', zIndex: 9999 }}
        />
        <Image
          className="absolute z-[-1] left-0 bg-transparent top-[20%] pointer-events-none"
          src="/assets/img/bubble2-2.svg"
          alt="Animate Frame"
          width={73}
          height={73}
          style={{ objectFit: 'contain', zIndex: 9999 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          style={{ position: 'relative', zIndex: 99999 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="mt-[20vh] bg-transparent"
        >
          <h1
            className={`font-integral uppercase md:text-[64px] text-[#E4E4E7] bg-transparent text-[40px] leading-[1] break-words mx-auto md:max-w-[750px] text-center`}
          >
            The value network of gaming
          </h1>
          <p
            className={`text-[14px] leading-[20px] bg-transparent text-[#CACACE] mt-[3vh] mx-auto max-w-[500px] text-center`}
          >
            The fundamental protocol that allows anyone to create gaming
            applications built on top of player identities.
          </p>
        </motion.div>
        <div
          className="flex items-center bg-transparent justify-center gap-5 mt-[6vh] flex-wrap"
          style={{ position: 'relative', zIndex: 99999, padding: '20px' }}
        >
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            className="rounded-[16px] hover:scale-105 transition-all duration-[350] ease-linear text-white bg-[#090909cc]  card-border sm:min-w-[387px] min-w-[100%] min-h-[244px]"
            style={{ position: 'relative', zIndex: 99999, padding: '20px' }}
          >
            <h2 className={` bg-transparent text-[24px] text-[#E4E4E7]`}>
              Gaming social layer
            </h2>
            <h2
              className={`text-[14px] leading-[20px] text-[#CACACE] mt-[1vh] bg-transparent`}
            >
              Gamers take control of their data.
            </h2>
            <Image
              className="mt-[6vh]  bg-transparent pointer-events-none"
              src="/assets/img/Home.png"
              alt="Animate Frame"
              width={72}
              height={88}
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
          <motion.div
            style={{ position: 'relative', zIndex: 99999, padding: '20px' }}
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            className="rounded-[16px] hover:scale-105 transition-all duration-[350] ease-linear text-white bg-[#090909cc] card-border sm:min-w-[387px] min-w-[100%] min-h-[244px]"
          >
            <h2 className={`text-[24px]  bg-transparent text-[#E4E4E7]`}>
              Gaming social layer
            </h2>
            <h2
              className={`text-[14px]  bg-transparent text-[#CACACE] leading-[20px] text-secondary mt-[1vh]`}
            >
              Gamers take control of their data.
            </h2>
            <Image
              className="mt-[6vh] bg-transparent pointer-events-none"
              src="/assets/img/star.png"
              alt="Animate Frame"
              width={88}
              height={88}
              style={{ objectFit: 'contain' }}
            />
          </motion.div>
        </div>
        <NewGaming
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          targetRef={targetRef}
        />
      </div>
    </section>
  );
};

export default ValueNetwork;
