/**
 * Main page scripts.
 *
 * @module Main
 */

/** Import utils */
import { Resp } from 'js/modules/dev/helpers';

export class Main {
  /**
   * Example.
   */
  test = () => {
    console.log('isTouch: ', Resp.isTouch);
    console.log('isDesk: ', Resp.isDesk);
    console.log('isTablet: ', Resp.isTablet);
    console.log('isMobile: ', Resp.isMobile);
  };

  /**
   * Initialize Main page scripts.
   */
  init() {
    this.test();
  }
}

/** Export Main page class instance by default */
export default new Main();