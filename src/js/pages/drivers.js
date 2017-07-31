/**
 * Drivers page scripts.
 *
 * @module Drivers
 */

/** Import utils */
import { $document } from 'js/modules/dev/helpers';
import Header from '../components/header';

/** Import sections */

export default class Drivers {
  /**
   * Cache data.
   */
  constructor() {
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
   * Enable body scroll
   *
   * @return {Home}
   */
  enableBodyScroll() {
    if ($('main').attr('data-page') !== 'home') {
      $('body').css('overflow', 'visible');
    }

    return this;
  }

  /**
   * Initialize Main page scripts.
   */
  init() {
    this.initHeaderAnimation();
    this.enableBodyScroll();
  }
}
