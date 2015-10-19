function factorial(n) {
    factorial.cache = {'0': 1};
    var fact = 1;

    if (n in factorial.cache) {
        return factorial.cache[n];
    } else {
        for (var i = 1; i <= n; i++) {
            fact *= i;
        }
        factorial.cache[n] = fact;
        return fact;
    }
}

console.log(factorial(5));
console.log(factorial(5));
