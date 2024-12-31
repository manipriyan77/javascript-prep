// The debounce function ensures that the provided function (func) is only executed after a specified delay (delay)
// has passed since the last time the debounced function was invoked. If the debounced function is called again before the delay period ends,
// the timer resets, and the delay period starts over.

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Example function to debounce
function onResize() {
  console.log('Resized!', new Date().toISOString());
}

// Create a debounced version of the function
const debouncedResize = debounce(onResize, 500);
