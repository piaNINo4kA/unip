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
    // jQuery objects
    this.$allControls = $('.functionality__slider-controls');
    this.$sliderItems = $('.functionality__slider-item');
    this.$sliderDesc = $('.functionality__desc');

    // jQuery classes
    this.activeControl = 'functionality__slider-controls-active';
    this.activeDesc = 'functionality__desc-active';
    this.activeSlider = 'functionality__slider-item-active';

    // initialize after construction
    this.init();
  }

  /**
   * Run header's reveal animation.
   *
   * @return {Drivers}
   */
  initHeaderAnimation() {
    Header.initAnimation();

    return this;
  }

  /**
   * Init drivers slider
   *
   * @return {Drivers}
   */
  initSlider() {
    const _this = this;

    $('.functionality__slider-controls').on('click', function() {
      const dataControl = $(this).attr('data-control');
      const currentDesc = $('.functionality').find(`[data-desc='${dataControl}']`);
      const currentSlide = $('.functionality').find('.functionality__slider').find(`[data-slide='${dataControl}']`);

      // Remove active class for all controls
      $('.functionality__slider-controls').each(function() {
        $(this).removeClass(_this.activeControl);
      });
      // Add active class to the current control
      $(this).addClass(_this.activeControl);

      // Hide all sliders
      $('.functionality__slider-item').each(function() {
        $(this).removeClass(_this.activeSlider);
      });
      // Show current slider
      currentSlide.addClass(_this.activeSlider);

      // Hide all descriptions
      $('.functionality__desc').each(function() {
        $(this).removeClass(_this.activeDesc);
      });
      // Show current description
      setTimeout(function() {
        currentDesc.fadeIn(400, function() {
          currentDesc.addClass(_this.activeDesc);
        });
      }, 500);
    });

    return this;
  }

  /**
   * Enable body scroll
   *
   * @return {Drivers}
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
    this.initSlider();
  }
}
