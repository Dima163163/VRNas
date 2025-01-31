import { initAccordion } from './initAccordion.js';
import { initScroll } from './initScroll.js';
import { initSlider } from './initSlider.js';
import { initStartedVideo } from './initStartedVideo.js';

const init = () => {
  initStartedVideo();
  initAccordion();
  initSlider();
  initScroll();
};

init();