/**
 * Website's common scripts.
 *
 * @module Common
 */

/** Import utils */
import Header from './header';

export class Common {
  /**
   * Initialize header scripts.
   *
   * @return {Common}
   */
  initializeHeader() {
    Header.init();

    return this;
  }

  /**
   * requestAnimationFrame shim.
   *
   * @return {Common}
   */
  rafShim() {
    window.requestAnimationFrame = window.requestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function (f) { return setTimeout(f, 1000 / 60); };

    window.cancelAnimationFrame = window.cancelAnimationFrame
      || window.mozCancelAnimationFrame
      || function (requestID) { clearTimeout(requestID); };

    return this;
  }

  /**
   * Initialize common scripts.
   *
   * @returns {Common}
   */
  init() {
    this
      .initializeHeader()
      .rafShim();

    return this;
  }
}

/** Export initialized common scripts by default */
export default new Common().init();
