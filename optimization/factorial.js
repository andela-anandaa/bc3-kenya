//IIFE
var factorial = (function () {
    var cache = {};

    function f(n) {
        if (n in cache) {
            return cache[n];
        } else {
            var fact = 1;
            if (n === 0) {
                cache[n] = 1;
                return 1;
            } else {
                for (var i = 1; i <= n; i++) {
                    // console.log("loop");
                    cache[i] = fact * i;
                    fact *= i;
                }
                cache[n] = fact;
                return fact;
            }
        }
    }
    return f;
})();


console.log(factorial(10));
console.log(factorial(4));
console.log(factorial(5));
