/**
 * Main page scripts.
 *
 * @module Main
 */

/** Import utils */
import Preloader from 'js/components/preloader';
import Header from 'js/components/header';
import { $document } from 'js/modules/dev/helpers';

/** Import sections */
import IntroSection from '../components/sections/intro';
import Slider3dSection from '../components/sections/slider3d';

export default class Home {
  /**
   * Cache data.
   */
  constructor() {
    // preloader
    this.preloader = new Preloader();

    // sections
    this.firstSection = new IntroSection();
    this.secondSection = new Slider3dSection();

    // initialize after construction
    this.init();
  }

  /**
   * Run header's reveal animation.
   *
   * @return {Home}
   */
  initHeaderAnimation() {
    Header.initAnimation();

    return this;
  }

  /**
   * Run intro section's reveal animation.
   *
   * @return {Home}
   */
  initFirstSectionAnimation() {
    this.firstSection.initAnimation();

    return this;
  }

  /**
   * Run slider3d section's reveal animation.
   *
   * @return {Home}
   */
  initSecondSectionAnimation() {
    this.secondSection.initAnimation();

    return this;
  }

  /**
   * Initialize all sections scripts.
   *
   * @return {Home}
   */
  initAllSectionsScripts() {
    // intro section
    this.firstSection.initScripts();

    // slider3d section
    this.secondSection.initScripts();

    return this;
  }

  /**
   * Initialize Main page scripts.
   */
  init() {
    // run preloader
    this.preloader.init()

      // run intro section's and header's animations
      // after preloader is finished
      .then(() => {
        this
          .initFirstSectionAnimation()
          .initHeaderAnimation();
      });

    // initialize main scripts
    this.initAllSectionsScripts();
  }
}
