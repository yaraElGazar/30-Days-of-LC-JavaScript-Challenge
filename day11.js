// 2621. Sleep

// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

/**
 * @param {number} millis
 */
async function sleep(millis) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, millis);
  });
  return promise;
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
