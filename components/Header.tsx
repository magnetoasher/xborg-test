import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delay: 0.1 },
          x: 0,
        }}
        className="pointer-events-none md:block hidden"
      >
        <Image
          alt="Upper Frame"
          loading="lazy"
          width={923}
          height={644.19}
          decoding="async"
          data-nimg="1"
          className="pointer-events-none"
          style={{ color: 'transparent' }}
          src="/assets/img/intro.png"
        />
      </motion.div>

      <div className="md:hidden flex items-center justify-between p-[10px]">
        <a href="/">
          <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0 },
              y: 0,
            }}
            alt="Logo"
            loading="lazy"
            width="56"
            height="56"
            decoding="async"
            data-nimg="1"
            className="pointer-events-none"
            style={{ color: 'transparent' }}
            src="/assets/img/Logo.png"
          />
        </a>
        <div>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0 },
              y: 0,
            }}
            className="btn-explore"
          >
            Explore Apps
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Header;
