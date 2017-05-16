'use strict';

/**
 * App entry point.
 *
 * @module App
 */

/** Import commonly used libs/modules */
import 'babel-polyfill';
import 'gsap';
import 'gsap/ScrollToPlugin';
import './components/common';

/** Import page controllers */
import Home from 'js/pages/home';

/** Import utils */
import { currentPage } from 'js/modules/dev/helpers';

/**
 * Run appropriate scripts for each page.
 **/
switch (currentPage) {
  /** Home page */
  case 'home': new Home; break;

  /** No page found */
  default: console.log('Null page');
}
