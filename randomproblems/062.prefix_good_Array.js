// Problem Statement
// Antonio has an array A consisting of N integers.
// An array B is a prefix of array A if B can be formed by deleting several(possibly zero but not all) elements from the end of array A. Like for array A = [5,1,4,2], the prefixes are A1..1 = [5], A1..2 = [5,1], A1..3 = [5,1,4], A1..4 = [5,1,4,2].
// A prefix is considered good if the sum of its elements is an odd number. Like for A = [5,1,4,2], A1..1 and A1..4 are the good prefixes.
// Now, Antonio wants to rearrange the elements of array A such that there are a maximum number of good prefixes in final array A.
// Given array A, print the maximum number of good prefixes Antonio can get in final array A. Also print a possible arrangement of elements of array A. If there are many such arrangements, print the lexicographically smallest of them.
// Input Format
// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format
// First print the maximum number of good prefixes Antonio can get in final array A.
// Then in the next line print N space separated integers denoting an arrangement of elements of array A. If there are many such arrangements, print the lexicographically smallest of them.
// Constraints
// 1<=N<=105
// 1<=Ai<=105
// Sample Input 1
// 3
// 4 3 6
// Sample Output 1
// 3
// 3 4 6
// Explanation of Sample 1
// A = [3,4,6]
// Sum of elements in prefix A1..1 = 3
// Sum of elements in prefix A1..2 = 3+4 = 7
// Sum of elements in prefix A1..3 = 3+4+6 = 13
// Hence it is possible to rearrange the elements of the given array such that all its three prefixes are good.

///solution for this ////
function prefix(A, n) {

    let sum = 0;
    let prefixarr = []
    for (let i = 0; i < n; i++) {
        sum = sum + A[i]
        console.log(sum, A[i])
        if (sum % 2 != 0) {
            prefixarr.push(A[i])
        }
    }
    prefixarr.sort((a, b) => { return a - b })
    return prefixarr.length
}
let b = [3, 4, 6]
console.log(prefix(b))