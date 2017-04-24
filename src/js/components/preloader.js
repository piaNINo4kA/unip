/**
 * Website's preloader module.
 *
 * @module Preloader
 */

/** Import utils */
import Animation from '../modules/dev/animation';

export default class Preloader {
  /**
   * Create new preloader instance.
   *
   * @param {jQuery} $preloader - DOM element to activate preloader on.
   */
  constructor($preloader = $('#preloader')) {
    this.$preloader = $preloader;

    this.noShadowsClass = 'no-shadow';

    this.$leftLines = $preloader.find('.preloader__line--left');
    this.$rightLines = $preloader.find('.preloader__line--right');
  }

  /**
   * Run preloader's animation.
   */
  runAnimation() {
    return new Promise(resolve => {
      // hide shadow
      this.$preloader.addClass(this.noShadowsClass);

      // animate preloader's lines
      Animation
        .tweenWithTimeout(this.$leftLines, 1, {
          time: 1.3,
          params: { css: { x: '-100%' } }
        })
        .tweenWithTimeout(this.$rightLines, 1, {
          time: 1.3,
          params: {
            css: { x: '100%' },
            onComplete: resolve
          }
        });
    });
  }

  /**
   * Initialize preloader.
   *
   * @return {Promise}
   */
  init() {
    const _this = this;

    return new Promise(resolve => {
      _this
        .runAnimation()
        .then(resolve);
    });
  }
}
