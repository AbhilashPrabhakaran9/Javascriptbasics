function outer() {
    let c=0

    function inner() {
        c=c+1
        return c
    }

    return inner()
}

outer()
outer()
outer()

//console.log(outer())
//console.log(outer())
//console.log(outer())
