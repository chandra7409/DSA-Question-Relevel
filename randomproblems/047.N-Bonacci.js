////Q.47///////////////
//// N-Bonacci
// Problem Statement :
// In the Fibonacci series, the Kth number is the sum of previous two numbers (K - 1)th and (K - 2)th and the first two numbers are known to you beforehand.
// Your task is to find the Kth N-Bonacci number.
// The Kth N-bonacci number is the sum of the previous N numbers and the first N numbers of this series will be given in an array A in the input.
// Since the answer can be large, print it modulo (10⁹ + 7). (Note : Modulo refers to the “%” operator).
// Constraints :
// 2 ≤ N ≤ 100
// 1 ≤ K ≤ 10⁵
// 0 ≤ A[i] ≤ 10⁵
// Input Format :
// First line contains 2 space separated integers N and K
// The second line contains N space separated integers, which are the first N terms of the series.
// Output Format :
// Print the K-th number modulo (10⁹ + 7) of the series. 
// Sample Input :
// 2 4
// 1 2
// Sample Output :
// 5
// Explanation of Sample :
// The first 2 numbers : 1, 2
// Third number : 1 + 2 = 3
// Fourth number : 3 + 2 = 5
// And 5 modulo (10⁹ + 7) = 5
///solution for this///////
function fib(n) {
    let a = 0,
        b = 1,
        c;
    var sum = 0;
    for (let i = 0; i < n; i++) {

        c = a + b;
        a = b;
        b = c;
        sum += c
        console.log(c)
    }
    // let bin=(n*(n-1))/2
    // console.log(bin)
    // console.log(sum)
    // let ans=bin + sum ;
    return c % (1000000000 + 7);
}
//0, 1,1,2,3,5,8,13,21,34,
console.log(fib(3))