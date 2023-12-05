import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NewGamingProps } from 'types/newGamingProps';
import userNames from '../data/users.json';
import playerData from '../data/playerData.json';

const NewGaming: React.FC<NewGamingProps> = ({
  activeIndex,
  setActiveIndex,
  targetRef,
}) => {
  const renderValue = (value, depth = 1) => {
    if (typeof value === 'string') {
      return <span className="bg-transparent">{`"${value}"`}</span>;
    } else if (Array.isArray(value)) {
      return (
        <>
          <span className="text-white bg-transparent">{` [ `}</span>
          {value.map((item, index) => (
            <span key={index}>
              <span className="bg-transparent">{`"${item}"`}</span>
              {index !== value.length - 1 && (
                <span className="text-white bg-transparent">{`, `}</span>
              )}
            </span>
          ))}
          <span className="text-white bg-transparent">{` ]`}</span>
        </>
      );
    } else if (typeof value === 'object') {
      return (
        <div className="bg-transparent">
          <span className="text-white bg-transparent">{`{`}</span>
          <div className={`ml-${depth * 4} bg-transparent`}>
            {Object.entries(value).map(([key, val]) => (
              <div key={key} className="bg-transparent">
                <span className="bg-transparent">{`"${key}"`}</span>
                <span className="text-white bg-transparent">{`: `}</span>
                {renderValue(val, depth + 1)}
                <span className="text-white bg-transparent">{`, `}</span>
              </div>
            ))}
          </div>
          <span className="text-white bg-transparent">{`}`}</span>
        </div>
      );
    } else {
      return (
        <span className="text-[#EB3A4A] bg-transparent">{` ${value}`}</span>
      );
    }
  };

  return (
    <div
      className="flex items-center justify-center mt-[18vh] mb-[48vh] flex-wrap relative bg-transparent"
      style={{ zIndex: 999 }}
    >
      <div className="md:w-1/2 w-full bg-transparent">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0 },
            x: 0,
          }}
          className={`uppercase bg-transparent text-[40px] leading-[1] font-integral text-[#F0F0F0] max-w-[350px]`}
        >
          The New Gaming Web
        </motion.h1>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0.2 },
            x: 0,
          }}
          className={`text-[14px] text-[#CACACE] leading-[20px] bg-transparent mt-8 max-w-[380px]`}
        >
          At the core of the XBorg Data Graph Protocol lies a dynamic and
          interconnected network of gaming profiles. Each player&apos;s profile
          is represented as a unique ERC-721 NFT, complete with metadata unique
          to their gaming journey.{' '}
        </motion.p>
      </div>
      <div className="md:w-1/2 mt-[8vh] md:mt-0 w-full grid sm:grid-cols-2 gap-6 bg-transparent">
        {userNames &&
          userNames.length !== 0 &&
          userNames.map((user, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.2 * index },
                x: 0,
              }}
              className={`relative bg-transparent`}
            >
              <div
                ref={index === activeIndex ? targetRef : null}
                onClick={() => {
                  setActiveIndex((prev) => {
                    if (index === prev) return -1;
                    else return index;
                  });
                }}
                className={
                  index === activeIndex
                    ? 'btn_bg button cursor-pointer special-btn reverse flex btn-border items-center relative gap-3 rounded-full '
                    : `button cursor-pointer special-btn reverse flex btn-border items-center relative gap-3 rounded-full `
                }
                style={
                  index === activeIndex
                    ? {
                        background: '#eb3a4a80 !important',
                        border: '1px solid #EB3A4A',
                        zIndex: '99',
                      }
                    : { border: '1px solid ' }
                }
              >
                <span className="p-[5px] w-[100%] flex items-center bg-transparent gap-3">
                  <Image
                    className="rounded-full pointer-events-none bg-transparent"
                    src={user?.src}
                    alt="Animate Frame"
                    height={64}
                    width={64}
                    style={{ objectFit: 'cover' }}
                  />
                  <p
                    className="text-[16px] m-0"
                    style={
                      index === activeIndex
                        ? {
                            color: '#EB3A4A',
                            background: 'transparent',
                          }
                        : {
                            background: 'transparent',
                            backgroundImage: `linear-gradient(90deg, #1A1A1A 0%, #ABABAB 102.73%),
                                              linear-gradient(88.95deg, #FFFFFF 80.46%, rgba(255, 255, 255, 0) 112.56%)`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }
                    }
                  >
                    {user.name}
                  </p>
                </span>
              </div>
              {index === activeIndex ? (
                <div
                  style={{
                    backdropFilter: 'blur(7px)',
                    background: 'rgba(9, 9, 9, 0.8)',
                  }}
                  className={`absolute backdrop-blur-md" ${
                    index % 2 === 0 && index === activeIndex
                      ? 'md:left-[-13px] left-[-3%]'
                      : 'md:right-[-13px] right-[-10px]'
                  } top-[-12px] z-10  backdrop-blur-md md:w-[220%] md:min-h-[404px] w-[105%] rounded-[16px] border-solid border-2 border-[#343434] p-[10px]`}
                >
                  <pre
                    className={`sm:text-[14px] bg-transparent text-[8.7px] mt-[10vh] text-[#95959D] `}
                  >
                    <span className="text-white bg-transparent">{`player_metadata = {`}</span>
                    <div className="ml-4 bg-transparent">
                      {Object.entries(playerData).map(
                        ([key, value], idx, arr) => (
                          <div key={key} className="bg-transparent">
                            <span className="bg-transparent">{`"${key}"`}</span>
                            <span className="text-white bg-transparent">{`: `}</span>
                            {renderValue(value)}
                            {idx !== arr.length - 1 && (
                              <span className="text-white bg-transparent">{`, `}</span>
                            )}
                          </div>
                        )
                      )}
                    </div>
                    <span className="text-white bg-transparent">{`}`}</span>
                  </pre>
                </div>
              ) : (
                ''
              )}
            </motion.div>
          ))}
        <div></div>
      </div>
      <Image
        className="absolute right-[-5.5%] -z-10 top-[-30vw] pointer-events-none"
        src="/assets/img/Map0036 1.svg"
        alt="Animate Frame"
        width={1028.07}
        height={1057.74}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default NewGaming;
