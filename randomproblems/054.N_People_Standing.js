//////Q.54///////////
// // Problem Statement :
// // There are N people standing in a queue. They are numbered from 1 to N from left to right. You have been given an array A of size N, where A[i] denotes the height of the i-th person. A person i can see another person j, if i and j follows the following rules :
// // i < j
// // The height of every person between i and j should be less than the height of j-th person, i.e for every k(i < k < j), A[k]<A[j].
// // You have to print N integers, where i-th integer will denote the number of people i-th person can see.
// // Constraints :
// // 1 <= t  <= 10^3 
// // 1  <=N <= 10^5
// // 1  <=A[i]  <= 10^6
// // Input Format :
// // First-line contains a single integer t, the number of test cases.
// // The first line of each test case contains a single integer N, the number of people standing in the queue.
// // The second line of each test case contains N positive integers, i.e the height of people.
// // The sum of N over all test cases doesn’t exceed 4*10^5
// // Output Format :
// // For each test case, output a single line, and each line should contain N integers— Where i-th integer denotes the number of people the i-th person can see.
// // Sample Input :
// // 1
// // 6
// // 11 6 7 5 11 11
// // Sample Output 
// // 3 2 2 1 1 0 
// // Explanation of Sample :
// // 1st person can see the person standing at positions 2, 3, and 5.
// // 2nd person can see the person standing at positions 3 and 5.
// // 3rd person can see only the person standing at position 5.
// // 4th person can see only the person standing at position 5.
// // 5th person can see only the person standing at position 6.
// // No person standing in front of 6th person.


////solution for this queation///
// function abc(A, n) {
//     var k = 0;
//     var b = []
//     for (let i = 0; i < n; i++) {
//         if (A[i] < A[i + 1]) {
//             k++;
//             console.log(A[i], A[i + 1])
//             console.log(k);
//         }
//         b.push(k)

//         console.log(b)
//     }

// }
// let tc = parseInt(readline());
// while (tc--) {
//     let n = parseInt(readline());
//     let A = [];
//     A = readline().split(" ").map(Number);
//     console.log(abc(A, n))

// }