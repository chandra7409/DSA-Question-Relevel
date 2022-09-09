///Q.39/////////////////
// POWER OF K
// Problem Statement
// You are given an integer K and Q queries. In each query you have to find the sum of first N natural
// numbers, by taking the powers of K with negative sign. Power of K means K0, K1, K2 .... and so on.
// For Example, if N = 5, K = 2 then sum will be -1 -2 +3 -4 +5, powers of K here are
// 20,21,22.
// Constraints
// • 1 <= Q <= 2*105
// • 1 <= N, K <= 109
// • All input values are integers.
// Input Format
// • First-line contains two space separated integers Q and K.
// • Next Q lines each contains a single integer N.
// Output Format
// • Print in a newline for each test case the required sum.
// Sample Input 1
// 2 2
// 2
// 5
// Sample Output 1
// -3
// 1
// Explanation of Sample 1
// For test 1, Sum = -1-2 = -3
// For test 2, Sum = -1-2+3-4+5 = 1
// // 



function solve(t, p, query) {
    t = 0;
    let k = 1;
    let pre = [];
    let v = [];
    let sum = 0;
    if (p == 1) {
        v.push(1);
        pre.push(1);
    } else {
        while (k <= 1000000000) {
            v.push(k);
            sum += k;
            pre.push(sum);
            k *= p;
        }
    }
    while (t < query.length) {
        let n = query[t];
        let ans = (n * (n + 1)) / 2;;
        let k = upper_bound(v, v.length, n);
        k--;
        ans -= (2 * pre[k]);
        console.log(ans);
        t++;
    }
}

function upper_bound(arr, N, X) {
    let mid;
    let low = 0;
    let high = N;
    while (low < high) {
        mid = low + Math.floor((high - low) / 2);
        if (X >= arr[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    if (low < N && arr[low] <= X) {
        low++;
    }
    return low;
}