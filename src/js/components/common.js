/**
 * Website's common scripts.
 *
 * @module Common
 */

/** Import utils */
import { Resp } from '../modules/dev/helpers';
import Header from './header';
import ScrollController from './scrollController';
import ProgressBar from './progressBar';
import 'perfect-scrollbar/jquery';

export class Common {
  /**
   * Cache data.
   */
  constructor() {
    this.$scrollableElements = $('.js-perfect-scrollbar');
  }

  /**
   * Initialize progress bar's click-to-page.
   *
   * @return {Common}
   */
  initProgressBar() {
    ProgressBar.initScrollToSectionOnClick();

    return this;
  }

  /**
   * Initialize perfect-scrollbar on scrollable elements.
   *
   * @return {Common}
   */
  initPerfectScrollbar() {
    this.$scrollableElements.perfectScrollbar({
      wheelPropagation: true,
      wheelSpeed: 0.5
    });

    return this;
  }

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
      .rafShim()
      .initPerfectScrollbar()
      .initProgressBar();

    return this;
  }
}

/** Export initialized common scripts by default */
export default new Common().init();
