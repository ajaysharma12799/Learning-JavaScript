function sum(n) {
    let result = 0
    for(let i=1; i<=n; i++) {
        result += i;
    }
    return result;
}

function memoizedSum(callback) {
    let cache = {};
    return function(...args) {
        let n = args[0];
        if(n in cache) {
            return cache[n];
        }
        else {
            let result = callback(n);
            cache[n] = result;
            return result;
        }
    }
}

let efficientMemoize = memoizedSum(sum);
let result = efficientMemoize(15);
console.log(result);