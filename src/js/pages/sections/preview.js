/**
 * Preview section module.
 *
 * @module PreviewSection
 */

/** Import utils */
import Animation from '../../modules/dev/animation';
import { css } from '../../modules/dev/helpers';
import { Slider3dSection } from './slider3d';

export class PreviewSection extends Slider3dSection {
  /**
   * Cache elements etc.
   *
   * @param {jQuery} [$previewSection]
   */
  constructor($previewSection = $('#preview-section')) {
    super($previewSection);

    this.mainContentAnimationDelay = 0.1;
  }

  /**
   * Reveal section's main content.
   *
   * @return {PreviewSection}
   */
  revealMainContent() {
    const $container = this.$section.find('.preview__container');
    const $linesContainer = $container.find('.preview__lines');

    // show main picture, text, bg pictures
    requestAnimationFrame(() => {
      $container.removeClass(css.isHiddenForAnimation);
    });

    // show lines
    Animation.delay(1, () => {
      requestAnimationFrame(() => {
        $linesContainer.removeClass(css.isHiddenForAnimation);
      });
    });

    return this;
  }

  /**
   * Initialize section's scripts.
   *
   * @return {PreviewSection}
   */
  initScripts() {
    this.initLearnMore();

    return this;
  }
}

/** Export initialized class instance by default */
export default new PreviewSection;
