setTimeout(() => {
    console.log(1)
}, 0)

setImmediate(() => {
    console.log(2)
})

setTimeout(() => {
    console.log(3)
}, 6)

Promise.resolve().then(() => {
    console.log(4)
}).catch(() => {
    console.log(5)
}).then(() => {
    console.log(6)
    setTimeout(() => {
        console.log(7)
    })
    process.nextTick(() => {
        console.log(8)
    })
})

process.nextTick(() => {
    console.log(9)
})

setImmediate(() => {
    console.log(10)
})