'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const posX = useRef(0);
  const posY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    gsap.to({}, 0.005, {
      repeat: -1,
      onRepeat: function () {
        posX.current += (mouseX.current - posX.current) / 9;
        posY.current += (mouseY.current - posY.current) / 9;

        gsap.set(follower, {
          css: {
            left: posX.current - 12,
            top: posY.current - 12,
          },
        });

        gsap.set(cursor, {
          css: {
            left: mouseX.current,
            top: mouseY.current,
          },
        });
      },
    });

    document.addEventListener('mousemove', function (event) {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    });

    return () => {
      document.removeEventListener('mousemove', function () {});
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>

    </>
  );
};

export default CustomCursor;
