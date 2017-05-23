/**
 * Slider section module.
 *
 * @module SliderSection
 */

/** Import utils */
import { Slider3dSection } from './slider3d';

export class SliderSection extends Slider3dSection {
  /**
   * Cache elements etc.
   *
   * @param {jQuery} [$sliderSection]
   */
  constructor($sliderSection = $('#slider-section')) {
    super($sliderSection);
  }

  /**
   * Initialize section's scripts.
   *
   * @return {SliderSection}
   */
  initScripts() {
    this
      .initLearnMore();

    return this;
  }
}

/** Export initialized class instance by default */
export default new SliderSection;
