function getSomething(){
  return new Promise((res, rej) => {
    setTimeout(function(){
      res('something');
    }, 3000);
  });
}

function getAndPrint(){
  /* ES6, without await/async */
  var s = getSomething();
  s.then((s) => console.log("ES6: " + s));
}

async function getAndPrintAsync(){
  /* ES7, with await and async */
  var s = getSomething();
  var s = await getSomething();
  console.log("ES7: " + s);
}

getAndPrint();
getAndPrintAsync();
setTimeout(()=>console.log('hi2'), 0);
console.log('hi');
