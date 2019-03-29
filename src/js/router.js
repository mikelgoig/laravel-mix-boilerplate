/* -------------------------------------------------------------------------
 * ES6 implementation of Paul Irish's DOM-based routing.
 *
 * Based on:
 *  http://goo.gl/EUTi53 by Paul Irish
 *  https://goo.gl/h1AvyR by Jason Garber
 * ------------------------------------------------------------------------- */

export default (routes) => {
  return {
    fire(func, funcname, args) {
      let fire;
      fire = func !== '';
      fire = fire && routes[func];
      const name = (funcname === undefined) ? 'init' : funcname;
      fire = fire && typeof routes[func][name] === 'function';

      if (fire) {
        routes[func][name](args);
      }
    },

    load() {
      this.fire('common');

      const controller = document.body.getAttribute('data-controller');
      const action = document.body.getAttribute('data-action');

      this.fire(controller);
      this.fire(controller, action);
      this.fire(controller, 'finalize');

      this.fire('common', 'finalize');
    },
  };
};
