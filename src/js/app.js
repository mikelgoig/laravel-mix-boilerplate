/* -------------------------------------------------------------------------
 * First we will load all of this project's JavaScript dependencies.
 * ------------------------------------------------------------------------- */

import 'bootstrap';

/* -------------------------------------------------------------------------
 * Then we will load a DOM-based router.
 * ------------------------------------------------------------------------- */

import Router from './router';

const router = new Router({
  'common': {
    init() {
      //
    },

    finalize() {
      //
    },
  },
});

document.addEventListener('DOMContentLoaded', event => {
  router.load();
});
