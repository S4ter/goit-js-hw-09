function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(console.log('resolved'));
      } else {
        reject('I got broken');
      }
    }, delay);
  });
}
