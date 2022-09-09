////Q.53/////////
// Alphabet Addiction
// Problem Statement:
//     Peter is addicted to some alphabets.These alphabets will be given to you in an Array A of size M.
// He starts to form strings using these alphabets and starts arranging them in the following manner: Strings of lesser length are placed before longer ones, and in
//     case of strings of same length he places lexicographically smaller strings before others.
// Suppose, He is obsessed with[‘a’, ‘b’, ‘c’], so he forms a sequence like this: [“a”, “b”, “c”, “aa”, “ab”, “ac”, “ba”, “bb”, “bc”, ....] and so on.
// He wonders what is the Nth term of this sequence.Your task is to find the Nth number of the sequence thus formed.

// Constraints:
//     1≤ N≤ 10⁹
// 2≤ M≤ 26
// A contains lowercase english alphabets
// Input Format:
//     First line contains an integer M, the number of distinct alphabets he is addicted to
// Second line contains M space separated alphabets
// Third line contains N
// Output Format:
//     Print the Nth string
// Sample Input:
//     3
// a b c
// 10
// Sample Output:
//     ca
// Explanation of Sample:
//     The first few strings are: “a”, “b”, “c”, “aa”, “ab”, “ac”, “ba”, “bb”, “bc”, “ca”, “cb”…
// The 10 th string is ca.


// ///solutionfor this question////
// function abc(A, N) {
//     var B = [...A];
//     for (let i = 0; i < A.length; i++) {
//         for (let j = 0; j < A.length; j++) {
//             B.push(A[i] + A[j])
//         }
//     }
//     console.log(B)
//         // B.sort()
//     return B[N - 1]
// }

// let b = ["a", "b", "c"]
// console.log(abc(b, 10))