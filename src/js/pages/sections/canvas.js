/**
 * Canvas section module.
 *
 * @module CanvasSection
 */

/** Import utils */
import { css } from '../../modules/dev/helpers';
import { Slider3dSection } from './slider3d';

export class CanvasSection extends Slider3dSection {
  /**
   * Cache elements etc.
   *
   * @param {jQuery} [$canvasSection]
   */
  constructor($canvasSection = $('#canvas-section')) {
    super($canvasSection);

    this.mainContentAnimationDelay = 1;
    this.mainRevealed = false;

    // for text animaton interval
    this.$text = this.$section.find('.canvas__text-item');
    this.textIndex = 0;
    this.textCount = this.$text.length - 1;
    this.changeText = function () {
      this.$text.removeClass(css.active)
        .eq(++this.textIndex).addClass(css.active);

      if (this.textIndex === this.textCount) this.textIndex = -1;
    }.bind(this);
  }

  /**
   * Reveal section's main content.
   *
   * @return {CanvasSection}
   */
  revealMainContent() {
    if (!this.mainRevealed) {
      const $inner = this.$section.find('.canvas__inner');

      // show carousel and button
      requestAnimationFrame(() => {
        $inner.addClass(css.animationFinished);
      });

      this.mainRevealed = true;
    }

    // init text animation
    this.runTextChange();

    return this;
  }

  /**
   * Run text-change animation.
   *
   * @return {CanvasSection}
   */
  runTextChange() {
    window.clearInterval(window.textChangeInterval);
    window.textChangeInterval = setInterval(this.changeText, 3000);

    return this;
  }

  /**
   * Initialize section's scripts.
   *
   * @return {CanvasSection}
   */
  initScripts() {
    this
      .initLearnMore();

    return this;
  }
}

/** Export initialized class instance by default */
export default new CanvasSection;
