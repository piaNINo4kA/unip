/**
 * Website's common scripts.
 *
 * @module Common
 */

/** Import utils */
import { Resp } from '../modules/dev/helpers';
import Header from './header';
import ScrollController from './scrollController';

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
   * Initialize full-page scroll controller.
   *
   * @return {Common}
   */
  initializeScrollController() {
    if (Resp.isDeskCustom) ScrollController.init();

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
      .initializeScrollController()
      .rafShim();

    return this;
  }
}

/** Export initialized common scripts by default */
export default new Common().init();
