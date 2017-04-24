/**
 * Main page scripts.
 *
 * @module Main
 */

/** Import utils */
import Preloader from 'js/components/preloader';
import { $document } from 'js/modules/dev/helpers';

export class Main {
  /**
   * Cache data.
   */
  constructor() {}

  /**
   * Initialize Main page scripts (on document.ready).
   */
  init() {
    const _this = this;

    $document.ready(() => {
      setTimeout(() => {
        // Run preloader
        (new Preloader).init();
      }, 2000);
    });
  }
}

/** Export Main page class instance by default */
export default new Main();
