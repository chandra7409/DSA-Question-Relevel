// ////Q25/////////////
// Question Name: Even Distribution
// Antonio wants to gift N pairs of integers to his girlfriend Teena.
// For this he went to a nearby arrays shop to buy an array consisting of 2 * N integers.
// Teena likes a pair of integers(a, b) if and only the sum of two integers is even,
// i.e.a + b when divided by 2, leaves remainder 0.
// Antonio does not like wasting things.So before buying the array he wants to make sure that
// he can form N pairs using the elements of the given array such that
// Teena likes all the N pairs.
// For this he asked his coder friend
// for help.Help himl
// Input Format

// First line of input contains T denoting the number of test cases.
// First line of every test
// case contains a single integer denoting N.
// Next line of input contains 2 * N space separated integers denoting the elements of the array Antonio is buying.
// Output Format
// For every test
// case print“ YES”,
// if Antonio can form N pairs using the elements of the given array such that Teena likes all the N pairs,
// else print“ NO”.
// Constraints
// 1 <= T <= 5
// 1 <= N <= 105
// 1 <= Ai <= 109
// Sample Input 1
// 2
// 2
// 2 4 1 3
// 2
// 10 12 2 3
// Sample Output 1
// YES
// NO
// Explanation of Sample 1
// In test
// case 1:
//     Antonio can form the pairs as: (1 st element, 2 nd element), (3 rd element, 4 th element)
//     In test
// case 2:
//     It 's not possible for Antonio to form 2 pairs such that Teena likes both the pairs.
//         -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//         answer:
//         function abc(A, n) {
//             let even = 0;
//             let odd = 0;
//             let l = 2 * n
//             for (let i = 0; i < l; i++) {
//                 if (A[i] % 2 === 0) {
//                     even++
//                 } else {
//                     odd++
//                 }
//             }
//             //   console.log(even,odd)
//             if (odd % 2 != 0) {
//                 odd = odd - 1
//             }
//             if (even % 2 != 0) {
//                 even = even - 1;
//             }
//             //   console.log(even,odd)
//             let ans = (odd + even) / 2;
//             //   console.log(ans)
//             if (ans === n) {
//                 return "YES"
//             } else {
//                 return "NO"
//             }
//         }
//     let tc = parseInt(readline());
//     while (tc--) {
//         let n = parseInt(readline());
//         let arr = [];
//         arr = readline().split(" ").map(Number);
//         console.log(abc(arr, n))

//     }