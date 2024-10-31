function calculateFibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1, fib = 1;
    for (let i = 2; i <= num; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function () {

        const num = parseInt(document.getElementById("num").value, 10);

        const result = calculateFibonacci(num);
        document.getElementById("fibonacciLbl").textContent = `Fibonacci(${num}) = ${result}`;
    });
});
