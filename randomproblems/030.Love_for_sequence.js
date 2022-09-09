// /////Q.30////////////////////////
// Love
// for Subsequences
// Problem Statement
// Antonio is a famous person known
// for his Love
// for subsequences.He has a sequence A of length N.
// He wants to find a subsequence whose Love value is maximum.
// The Love value
// for a subsequence is calculated according to the rules below: -

//     ●If the sum of elements of the subsequence is odd then his Love value
// for the subsequence is zero.

// For example: -
//     for the given array { 3, 1, 2, 4, 5 }
// if we choose the subsequence { 3, 2, 4 }
// and the sum is 9
// which is odd so love value
// for this subsequence { 3, 2, 4 }
// is 0.

// ● If the sum of elements of the subsequence is even then his Love value
// for the subsequence is
// equal to the sum of elements of the subsequence.

// For example: -
//     for the given array { 3, 1, 2, 4, 5 }
// if we choose the subsequence { 3, 2, 5 }
// and the
// sum is 10 which is even so love value
// for this subsequence { 3, 2, 5 }
// is 10.
// Your task is to find a subsequence whose Love value is maximum.
// Note: -●A subsequence is a sequence that can be derived from another sequence by deleting some
// elements without changing the order of the remaining elements.●For empty subsequences, the Love value is zero.
// Constraint• 1 <= N <= 105• - 105 <= A[i] <= 105• All input values are integers.
// Input Format• First - line contains an integer N, the length of the sequence.•Second line contains N space - separated integers denoting the array A(the sequence).
// Output Format• In the first line print love value
// for the subsequence whose love value is maximum.
// Sample Input 1
// 5
// goal: to
// return even sum of subsequence
// 1. check sum
// for entire array
// for positive elements
// if sum is even: return sum
// else if sum is odd: remove the smallest odd number from the array
// elif
// if there is no possibility of even sum: return 0
// Sample Output 1
// 20
// Explanation of Sample 1
// For test case1 subsequence whose love value is maximum - > { 7, 3, 2, 8 }
// and it 's love value is 20



// ===
// === === === === === === === === === === === === === === === === === === === === === === === === === === === === === === =
// answer with 90 %
//     function abc(A, n) {
//         let sum = 0
//         let res = []
//         for (let i = 0; i < n; i++) {
//             if (A[i] > 0) {
//                 sum = sum + A[i];

//             }
//         }
//         let odd = 9999
//         for (let i = 0; i < n; i++) {
//             if (A[i] % 2 === 1 && A[i] < odd) {
//                 odd = A[i]
//             }
//         }
//         // console.log(odd)
//         if (sum % 2 === 0) {
//             return sum;
//         } else {
//             return sum - odd;
//         }
//     }




// 3 th round: