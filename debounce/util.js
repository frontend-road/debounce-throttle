/* eslint-disable */
let timerId = null;

export function debounce2(fn, wait = 1000) {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }
  timerId = setTimeout(() => {
    fn && fn();
  }, wait);
}

export function debounce3(fn, wait = 1000) {
  console.log('clicked3');
  return function() {
    let args = [].slice.call(arguments);
    // console.log(args);
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    timerId = setTimeout(() => {
      fn && fn(...args);
    }, wait);
  }
}

export function debounce4(fn, wait = 1000) {
  // 将 timerId 添加到 fn 上，实现无副作用，因为公用一个 timerId 的防抖函数会受其他防抖函数影响
  fn.timerId = null;
  return function() {
    console.log('timerId:', fn.timerId);
    let args = [].slice.call(arguments);
    if (fn.timerId) {
      clearTimeout(fn.timerId);
      fn.timerId = null;
    }
    fn.timerId = setTimeout(() => {
      fn && fn(...args);
    }, wait);
  }
}
