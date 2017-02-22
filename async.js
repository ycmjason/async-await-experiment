function getSomething(){
  // A function to simulate some asynchronous functions, used a simple timeout for this.
  return new Promise((res, rej) => {
    setTimeout(function(){
      res('something');
    }, 3000);
  });
}

/* `getAndPrint` and `getAndPrintAsync` are equivalent */
function getAndPrint(){
  /* ES6, without await/async */
  var s = getSomething();
  s.then((s) => console.log("ES6: " + s));
  // anything afterwards are still executed even when getSomething's promise hasn't been resolved
  console.log("ES6: getSomething is still going on but this line is printed");
}

async function getAndPrintAsync(){
  /* ES7, with await and async */
  var s = await getSomething();
  // anything afterwards is after getSomething's promise resolves
  console.log("ES7: getSomething is finish.");
  console.log("ES7: " + s);
}

getAndPrint();
getAndPrintAsync();

setTimeout(()=>console.log('hi2'), 0);
console.log('hi');

/* Output:
 *
 * ES6: getSomething is still going on but this line is printed
 * hi
 * hi2
 * ES6: something
 * ES7: getSomething is finish.
 * ES7: something
 */
