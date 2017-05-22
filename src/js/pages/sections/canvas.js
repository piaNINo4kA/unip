/**
 * Canvas section module.
 *
 * @module CanvasSection
 */

/** Import utils */
import { Slider3dSection } from './slider3d';

export class CanvasSection extends Slider3dSection {
  /**
   * Cache elements etc.
   *
   * @param {jQuery} [$canvasSection]
   */
  constructor($canvasSection = $('#canvas-section')) {
    super($canvasSection);
  }

  /**
   * Initialize section's scripts.
   *
   * @return {Slider3dSection}
   */
  initScripts() {
    this
      .initLearnMore();

    return this;
  }
}

/** Export initialized class instance by default */
export default new CanvasSection;
