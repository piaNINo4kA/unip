'use strict';

/**
 * App entry point.
 *
 * @module App
 */

/** Import commonly used libs/modules */
import { TweenMax } from 'gsap';

/** Import page controllers */
import Home from 'js/pages/home.page';

/** Import utils */
import { currentPage } from 'js/modules/dev/helpers';

/**
 * Run appropriate scripts for each page.
 **/
switch (currentPage) {
  /** Main page */
  case 'home': {
    Home.init();
    break;
  }
}
