function isInteger(num) {
    return (num % 1) == 0;
}

function findPrimes(a, b) {
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
