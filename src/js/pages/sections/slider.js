/**
 * Slider section module.
 *
 * @module SliderSection
 */

/** Import utils */
import {
  css,
  isScrolledIntoView,
  throttle
} from '../../modules/dev/helpers';
import { Slider3dSection } from './slider3d';

export class SliderSection extends Slider3dSection {
  /**
   * Cache elements etc.
   *
   * @param {jQuery} [$sliderSection]
   */
  constructor($sliderSection = $('#slider-section')) {
    super($sliderSection);

    this.mainContentAnimationDelay = 1;
    this.$carousel = this.$section.find('.slider__carousel');
  }

  /**
   * Reveal section's main content.
   *
   * @return {SliderSection}
   */
  revealMainContent() {
    const $inner = this.$section.find('.slider__inner');

    // show carousel and button
    requestAnimationFrame(() => {
      $inner.addClass(css.animationFinished);
    });

    // init demo
    this.slickDemo();

    return this;
  }

  /**
   * Go to the next slide when slick in viewport (demo).
   *
   * @return {SliderSection}
   */
  slickDemo() {
    const $section = this.$section;
    const $carousel = this.$carousel;

    $section.on('scroll.slickDemo', throttle(() => {
      if (isScrolledIntoView($carousel, 250)) {
        $carousel.slick('slickNext');
        $section.unbind('scroll.slickDemo');
      }
    }, 100));

    return this;
  }

  /**
   * Activate full-width slider.
   *
   * @return {SliderSection}
   */
  initSlider() {
    const $carousel = this.$section.find('.slider__carousel');
    const $nextBtn = this.$section.find('.slider__nextBtn');
    const slidesCount = $carousel.find('.slick-carousel__item').length - 1;

    $carousel.slick({
      arrows: false,
      dots: false,
      adaptiveHeight: true,
      infinite: true,
      draggable: false,
      slidesToShow: 2,
      variableWidth: true
    });

    $nextBtn.on('click tap', () => {
      const currentSlide = $carousel.slick('slickCurrentSlide');
      const isLastSlide = currentSlide === slidesCount;

      isLastSlide ? $carousel.slick('slickGoTo', 0) : $carousel.slick('slickNext');
    });

    return this;
  }
}

/** Export initialized class instance by default */
export default new SliderSection;
