const promises = [];
for (let i = 0; i < 5; i++) {
  const delay = Math.floor(Math.random() * 4) + 1;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, delay * 1000);
  });
  promises.push(promise);
}

Promise.any(promises).then((result) => {
  document.getElementById("output").innerHTML = result;
});
