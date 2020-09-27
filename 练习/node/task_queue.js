function fn(){

  console.log('start');

  setTimeout(() => {              // callback1
      console.log(111);
      
      setTimeout(() => {          // callback2
          console.log(222);
      }, 0);
      
      setImmediate(() => {        // callback3
          console.log(333);
      });
      
      process.nextTick(() => {    // callback4
          console.log(444);     
      });
      
  }, 0);
  
  setImmediate(() => {            // callback5
      console.log(555);
      
      process.nextTick(() => {    // callback6
         console.log(666); 
      });
  });
  
  setTimeout(() => {              // callback7
      console.log(777);
      
      process.nextTick(() => {    // callback8
          console.log(888);
      });
  }, 0);
  
  process.nextTick(() => {        // callback9
      console.log(999);
  });
  
  new Promise(function(resolve) {
    console.log(101010);
    resolve();
  }).then(function() {
    console.log(111111);
  });

  console.log('end');
}
fn();   

let promise = new Promise(function(resolve, reject) {
  console.log(7);
  resolve()
}).then(function(){
  console.log(8)
});

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end')