/**
 * Website's scroll controller module (desktop).
 *
 * @module ScrollController
 */

/** Import utils */
import {
  bindMethods,
  $window
} from '../modules/dev/helpers';
import 'jquery-mousewheel';
import Animation from '../modules/dev/animation';

export class ScrollController {
  /**
   * Set defaults, cache data, save context.
   */
  constructor() {
    this.currentlyScrolling = false;
    this.eventsNamespace = 'scrollController';

    this.currentSection = 0;
    this.fullPageSections = [
      'intro-section',
      'slider3d-section',
      'preview-section',
      'scrollInside'
    ];

    this.$scrollableDiv = $('#scrollInside');

    // save context
    bindMethods.bind(this)
    ('handleScroll', 'moveToPrevSection', 'moveToNextSection');
  }

  /**
   * Move to specified section.
   *
   * @param {String} sectionName
   * @return {ScrollController}
   */
  moveToSection(sectionName = this.fullPageSections[this.currentSection]) {
    this.currentlyScrolling = true;

    Animation.scrollTo(1.2, {
      scrollTo: `#${sectionName}`,
      ease: Power3.easeInOut,
      onComplete: () => this.currentlyScrolling = false
    });

    return this;
  }

  /**
   * Move to the previous section.
   *
   * @return {ScrollController}
   */
  moveToPrevSection() {
    // no previous sections left
    if (this.currentSection === 0) return this;

    // scrolling in the scrollable div
    const scrolledInsideDiv = this.$scrollableDiv.scrollTop();
    if (scrolledInsideDiv > 0) return this;

    // change section params
    this.currentSection--;

    // animate
    this.moveToSection();

    return this;
  }

  /**
   * Move to the next section.
   *
   * @return {ScrollController}
   */
  moveToNextSection() {
    // no previous sections left
    const fpSectionsCount = this.fullPageSections.length - 1;
    if (this.currentSection === fpSectionsCount) return this;

    // change section params
    this.currentSection++;

    // animate
    this.moveToSection();

    return this;
  }

  /**
   * Go the next/prev section according to scroll direction.
   *
   * @return {ScrollController}
   */
  dispatchScroll(scrollDirection) {
    switch (scrollDirection) {
      case 'up': {
        this.moveToPrevSection();
        break;
      }

      case 'down': {
        this.moveToNextSection();
        break;
      }

      default: {
        console.warn('Scrolling direction wasn\'t set');
      }
    }

    return this;
  }

  /**
   * Get scroll direction and dispatch.
   *
   * @return {ScrollController}
   */
  handleScroll(e) {
    // do nothing if scrolling in progress
    if (this.currentlyScrolling) return this;

    // get direction
    const delta = e.deltaY;
    const scrollDirection =
      delta ===  1 ? 'up' :
      delta === -1 ? 'down' :
      null;

    // dispatch event
    return this.dispatchScroll(scrollDirection);
  }

  /**
   * Attach event listener to the window.
   *
   * @return {ScrollController}
   */
  init() {
    // move to the current section
    this.moveToSection();

    // bind event listener
    $window.on(`mousewheel.${this.eventsNamespace}`, this.handleScroll);

    return this;
  }

  /**
   * Remove event listener from the window.
   *
   * @return {ScrollController}
   */
  kill() {
    // unbind event listener
    $window.unbind(`mousewheel.${this.eventsNamespace}`);

    return this;
  }
}

/** Export initialized ScrollController class instance by default */
export default new ScrollController();
