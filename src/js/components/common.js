/**
 * Website's common scripts.
 *
 * @module Common
 */

/** Import utils */
import 'perfect-scrollbar/jquery';
import objectFitImages from 'object-fit-images';
import { Resp, isIE, css } from '../modules/dev/helpers';
import Header from './header';
import ScrollController from './scrollController';
import ProgressBar from './progressBar';
import Animation from '../modules/dev/animation';

export class Common {
  /**
   * Cache data.
   */
  constructor() {
    this.$scrollableElements = $('.js-perfect-scrollbar');
    this.$upBtn = $('.upBtn, .footer__logo');
  }

  /**
   * Initialize 'object-fit-images' polyfill.
   *
   * @returns {Common}
   */
  initObjectFitImages() {
    objectFitImages();

    return this;
  }
  /**
   * Initialize progress bar's click-to-page.
   *
   * @return {Common}
   */
  initProgressBar() {
    if (Resp.isDeskCustom) {
      ProgressBar.initScrollToSectionOnClick();
    }

    return this;
  }

  /**
   * Initialize perfect-scrollbar on scrollable elements.
   *
   * @return {Common}
   */
  initPerfectScrollbar() {
    if (Resp.isDeskCustom) {
      this.$scrollableElements.perfectScrollbar({
        wheelPropagation: true,
        wheelSpeed: 0.5
      });
    }

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
   * Initialize 'up' button if exists.
   *
   * @return {Common}
   */
  initUpBtn() {
    if (this.$upBtn.length) {
      this.$upBtn.on('click tap', function () {
        if (Resp.isDeskCustom) {
          ScrollController.moveToSection(0);
        } else {
          Animation.scrollTo(1.2, {
            scrollTo: '#intro-section',
            ease: Power3.easeInOut
          });
        }
      });
    }

    return this;
  }

  /**
   * Check for IE and fix if needed.
   *
   * @return {Common}
   */
  initIEfix() {
    if (!isIE) return this;

    // fix svg hover (apps btns)
    const $btns = $('.btn');
    $btns.addClass(css.ieFix);

    // fix text block animation (words underline)
    const $textBlocks = $('.textBlock');
    $textBlocks.addClass(css.ieFix);

    return this;
  }

  /**
   * Initialize common scripts.
   *
   * @returns {Common}
   */
  init() {
    this
      .initObjectFitImages()
      .initializeHeader()
      .rafShim()
      .initPerfectScrollbar()
      .initProgressBar()
      .initUpBtn()
      .initIEfix();

    return this;
  }
}

/** Export initialized common scripts by default */
export default new Common().init();
