/**
 * Preview section module.
 *
 * @module PreviewSection
 */

/** Import utils */
import { Slider3dSection } from './slider3d';

export class PreviewSection extends Slider3dSection {
  /**
   * Cache elements etc.
   *
   * @param {jQuery} [$previewSection]
   */
  constructor($previewSection = $('#preview-section')) {
    super($previewSection);
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
export default new PreviewSection;
