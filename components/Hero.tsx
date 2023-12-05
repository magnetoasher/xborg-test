import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Buttons';

const Hero = () => {
  function ScrollEffect(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    const contentElement = document.getElementById('content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="hero" className="w-[90%] mx-auto">
      <div className="row mt-5" style={{ color: '#E4E4E6' }}>
        <div
          className="col-md-6 col-xl-5 col-lg-6 flex flex-col align-middle"
          style={{
            zIndex: 9999999,
            position: 'relative',
            background: 'transparent',
            paddingBottom: '110px',
          }}
        >
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              opacity: 'inherit',
              x: 0,
              transition: { duration: 1 },
            }}
            style={{
              color: '#EB3A4A',
              fontWeight: 500,
              fontSize: 12,
              textTransform: 'uppercase',
            }}
          >
            Lorem ipsum dolor
          </motion.p>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.3 },
              x: 0,
            }}
            className="mt-4 heading text-[#E4E4E7] "
          ></motion.p>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.9 },
              x: 0,
            }}
            className="col-xl-8 mt-4 text-[#CACACE] the_text"
            style={{
              fontWeight: 300,
              fontSize: 14,
              lineHeight: '20px',
              background: 'transparent',
            }}
          ></motion.p>

          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 1.1 },
              x: 0,
            }}
            className="btn-discord mt-8"
          >
            Join Discord
          </motion.button>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0 },
            y: 0,
          }}
          className="col-md-6 col-xl-7 col-lg-6 overlappingImages"
          style={{ paddingTop: 20 }}
        >
          <div
            className="mt-16"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              background: 'transparent',
            }}
          >
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.1 },
                y: 0,
              }}
              src="/assets/img/avatar.png"
              alt="avatar"
              width={100}
              height={100}
              style={{
                borderRadius: '50%',
                background: 'transparent',
                zIndex: 99,
              }}
            />
          </div>
          <div
            className="mt-3"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'transparent',
            }}
          >
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.3 },
                y: 0,
              }}
              style={{
                fontWeight: 400,
                fontSize: 10,
                margin: 3,
                background: 'transparent',
              }}
            >
              User id:
            </motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
                y: 0,
              }}
              style={{
                fontWeight: 400,
                fontSize: 14,
                background: 'transparent',
              }}
            >
              XBorg001
            </motion.p>
          </div>

          <div
            className="flex flex-col justify-center w-[100%] items-center justify-items-center mt-6"
            style={{ background: 'transparent', paddingBottom: 50 }}
          >
            <motion.div
              style={{ zIndex: 999 }}
              className="mx-2 mb-3"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.7 },
                y: 0,
              }}
            >
              <Button
                content={
                  <Image
                    src="/assets/img/group.svg"
                    width={20}
                    height={20}
                    alt="lock"
                  />
                }
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </motion.div>

            <motion.div
              className="bg-transparent"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.9 },
                y: 0,
              }}
            >
              <Button content="Soulbound Launchpad" />
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
                y: 0,
              }}
              className="flex justify-items-center mt-3"
            >
              <Button content="Soulbound Launchpad" />
              <Button content="Soulbound Launchpad" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, delay: 1 },
          y: 0,
        }}
      >
        <Link
          style={{ textDecoration: 'none' }}
          href="/#content"
          onClick={(e) => ScrollEffect(e)}
          className="scrolldown mt-5 flex flex-col items-center justify-center"
        >
          <p className="text-gradient text-[.85rem]">Scroll Down</p>
          <Image
            className="pointer-events-none"
            src="/assets/img/Vectordown.svg"
            alt="Animate Frame"
            width={25}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
