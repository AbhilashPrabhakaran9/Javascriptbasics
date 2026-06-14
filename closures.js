function outer() {
    let c=0

    function inner() {
        c=c+1
        return c
    }

    return inner
}

const counter = outer()

console.log(counter());
console.log(counter());
console.log(counter());





