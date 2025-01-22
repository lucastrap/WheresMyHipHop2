import React, { useEffect } from 'react';
import './ScrollingBanner.css';
import { gsap, Power0 } from 'gsap';

const ScrollingBanner = () => {
  useEffect(() => {
    const textScrollingContainers = document.querySelectorAll('.text_scrolling_container');

    textScrollingContainers.forEach((container) => {
      const numParts = 12; // Number of parts to create
      for (let i = 0; i < numParts; i++) {
        const part = document.createElement('div');
        part.classList.add('text_scrolling_part');

        const logoImage = document.createElement('img');
        logoImage.src = 'src/assets/images/menu-logo.png';
        logoImage.classList.add('menu_logo');
        part.appendChild(logoImage);

        container.appendChild(part);
      }

      gsap.to(container.querySelectorAll('.text_scrolling_part'), {
        x: '-100%',
        repeat: -1,
        duration: 60,
        ease: Power0.easeNone,
      }).totalProgress(0.5);
    });
  }, []);

  return (
    <section className="text_scrolling_section">
      <div className="text_scrolling_container"></div>
    </section>
  );
};

export default ScrollingBanner;
