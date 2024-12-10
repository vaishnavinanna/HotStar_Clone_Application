import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';
import styles from './Carousal.module.css';

function Carousal() {
  return (
    <div className={styles.container}>
      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide1} alt="Slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide2} alt="Slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide3} alt="Slide 3" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide4} alt="Slide 4" />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}

export default Carousal;

