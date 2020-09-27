console.log('main1',1)
process.nextTick(() => {
  console.log('next tick1',4)
})
setTimeout(() => {
  console.log('settimeout',6)
  process.nextTick(() => {
    console.log('next tick2',7)
  })
}, 0)
setTimeout(() => {
  console.log('setTimeout2',8)
  process.nextTick(() => {
    console.log('next tick3',9)
  })
})
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
})
  console.log('promise1',2)
}).then(() => {
  console.log('promise2',5)
})
console.log('main2',3)