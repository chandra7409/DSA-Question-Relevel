/////Q.40///////////////////////
// There is a zoo with N animals of different kinds represented by the string A , each kind of animal is
// represented as a letter from the lower case english alphabet. You need to partition the zoo into two zoos
// at index k such that the first zoo contains the animals from A[1] to A[K], and the second zoo contains
// animals from A[k+1] till A[N], You want to partition such that the common number of distinct animals in both
// the zoos is maximized
// Input Format
// The first line contains an integer N denoting the total number of animals
// The second line contains the string A
// Output Format
// Print an integer denoting the common number of distinct animals in both the zoos is maximized
// Constraint
// 1<=N<=10^5
// ‘a’<=A[i]<=’z’
// Sample Input
// 6
// zzttcz
// Sample output
// 2
// Explantion
// If the partition of zoo is zzt and tcz , t and z are common distinct characters

function solve() {
    let n;
    let s = [];
    let pref = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 26; j++) {
            pref[j][i + 1] = pref[j][i];
        }
        pref[s[i] - 'a'][i + 1]++;
    }
    let ans = 0;
    for (let i = l; i < n + l; i++) {
        let x1 = 0;
        for (let j = 0; j < 26; j++) {
            x1 += ((pref[j][i + 1] > 0) & (pref[j][n] - pref[j][i + 1] > 0));
        }
        ans = Math.max(ans, x1)
    }
    console.log(ans)
}

function main() {
    let t = 1;
    for (let i = 0; i < t; i++) {
        solve()
    }
}
main()