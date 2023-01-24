export const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    const fnCall = () => { fn.apply(this, args) };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, delay)
  };
}