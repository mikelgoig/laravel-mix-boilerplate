/* global jQuery */

/* ------------------------------------------------------------------------
 * First we will load all of this project's JavaScript dependencies.
 -------------------------------------------------------------------------- */

import 'bootstrap';

/* ------------------------------------------------------------------------
 * DOM-based Routing
 * Based on:
 *  http://goo.gl/EUTi53 by Paul Irish
 *  https://goo.gl/h1AvyR by Jason Garber
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 -------------------------------------------------------------------------- */

(function ($) {
  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  const hakunamatata = {
    common: {
      init() {
        //
      },

      finalize() {
        //
      },
    },
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event.
  const UTIL = {
    fire(func, funcname, args) {
      let fire;
      const namespace = hakunamatata;
      const name = funcname === undefined ? 'init' : funcname;

      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][name] === 'function';

      if (fire) {
        namespace[func][name](args);
      }
    },

    loadEvents() {
      // Fire common init() JS.
      UTIL.fire('common');

      const controller = document.body.getAttribute('data-controller');
      const action = document.body.getAttribute('data-action');

      // Fire controller init(), specific() and finalize() JS.
      UTIL.fire(controller);
      UTIL.fire(controller, action);
      UTIL.fire(controller, 'finalize');

      // Fire common finalize() JS.
      UTIL.fire('common', 'finalize');
    },
  };

  $(document).ready(UTIL.loadEvents);
}(jQuery));
