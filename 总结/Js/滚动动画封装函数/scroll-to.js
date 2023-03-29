Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); };
})();

/**
 * Because it's so fucking difficult to detect the scrolling element, just move them all
 * @param {number} amount
 */
function move (ele, amount) {
  // ele.scrollTop = amount;
  ele.scrollLeft = amount;
}

/**
 * @param {number} to
 * @param {DOM} ele
 * @param {number} duration
 * @param {Function} callback
 */
export function scrollTo (to, ele, duration, callback) {
  // const start = ele.scrollTop;
  const start = ele.scrollLeft;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;
  duration = (typeof (duration) === 'undefined') ? 500 : duration; // ms
  var animateScroll = function () {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    // move the ele
    move(ele, val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof (callback) === 'function') {
        // the animation is done so lets callback
        callback();
      }
    }
  };
  animateScroll();
}
