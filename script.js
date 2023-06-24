const promises = Array.from({ length: 5 }, () => {
  const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${randomTime} milliseconds`);
    }, randomTime);
  });
});

// Using Promise.any() to wait for the first resolved promise
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error('All promises rejected:', error);
  });
