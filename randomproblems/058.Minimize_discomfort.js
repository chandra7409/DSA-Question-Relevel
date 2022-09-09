/////Q.58/////////////
// Minimize Discomfort
// Problem Statement :
// You are given 2N integers each having a type 1 or 2.
// Using these integers, you need to form N pairs of 2 integers each such that the total discomfort is minimized.
// The discomfort of a pair can be defined as follows :-
// If the type of both the integers on the pair are same, the discomfort is zero.
// If the type is different, then the discomfort is the difference between the greater element and smaller element.
// Input Format :
// First line contains a single integer T, the number of test cases.
// First line of each test case contains a single integer N.
// Each of the following 2N lines contain two integers, X_i and type of X_i.
// Output Format :
// For each of the T test cases print a single line containing an integer, minimum possible discomfort.
// Constraints :
// 1 <= T <= 100
// 1 <= N <= 10^5
// 0 <= Xi <= 10^9
// 1 <= type <= 2
// Note :- Sum of N over all test cases will not exceed 5*10^5.
// Sample Input :
// 1
// 2
// 4  2
// 5  1
// 9  2
// 13  2
// Sample Output :
// 1
// Explanation :
// You can make pairs as follows : {9, 13}, {4, 5}. Since 9 and 13 are of the same type their discomfort is 0.
// Pair {4, 5} are of different types, so their discomfort is (5 - 4) = 1. So, the total discomfort is 1.


////solution for this ///
// function abc(a, b) {
//     let ans1 = a % 2
//     let ans2 = b % 2;
//     if (ans1 === ans2) {
//         var discomfort = 0
//     } else {
//         if (a > b) {
//             discomfort = a - b;
//         } else {
//             discomfort = b - a
//         }


//     }
//     return discomfort;

// }
// console.log(abc(25, 14))