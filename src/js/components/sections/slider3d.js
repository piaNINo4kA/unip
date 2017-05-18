/**
 * Slider3d section module.
 *
 * @module Slider3dSection
 */

export default class Slider3dSection {
  /**
   * Cache elements etc.
   *
   * @param {jQuery} $slider3dSection
   */
  constructor($slider3dSection = $('#slider3d-Section')) {
    this.$section = $slider3dSection;
  }

  /**
   * Initialize section's scripts.
   *
   * @return {Slider3dSection}
   */
  initScripts() {

    return this;
  }
}
