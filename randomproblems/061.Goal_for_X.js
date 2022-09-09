/////Q.61////////////////////////////
// GOAL FOR X

// Problem Statement

// Amy has an array A of N integers. In one operation she can select an element of the array A, and increase it by 1.

// She wants the Xth (1<=X<=N) smallest element of the array A, equal to the mean of the array.

// Find the minimum number of operations required to achieve her goal.

// You are given T independent test cases.

// Constraints

// 1 <= T <= 5
// 1 <= X <= N <= 105
// 1 <= Ai <= 109
// All input values are integers.
// Input Format

// First-line contains T.
// First line of each test case consists of two space separated integers N and X.
// Second line of each test case consists of N space separated integers denoting the array A.
// Output Format

// Print in a newline for each test case a single integer denoting the minimum number of operations required to achieve her goal.
// Sample Input 1

// 1

// 3 2

// 1 3 1

// Sample Output 1

// 1

// Explanation of Sample 1

// She selects the last element and increase it by 1. So, Array becomes = [1, 3, 2]

// Mean = (1+3+2)/3 = 2 and 2nd smallest of the array is 2.
function abc(A, k) {
    var ans = []
    if (A.length < k) return false;

    var opr = 0;
    A[A.length - 1] = A[A.length - 1] + 1;
    var sum = A[0];
    for (let i = 1; i < A.length; i++) {
        sum = sum + A[i];
    };
    console.log(A)

    var avg = sum / A.length;
    //   opr++;
    // ans.push(avg)
    let b = [...A];
    b.sort((a, b) => { return a - b })
    if (A.length == k) {
        console.log(b[k]);
        if (avg == b[k]) {
            opr++;
            console.log(opr)
        } else {
            return false;
        }
    }
    console.log("av", avg);
    console.log("b[k-1]", b[k - 1]);
    ans.push(b[k - 1])
    if (avg === b[k - 1]) {
        opr++;
        console.log(opr);
        //   if(avg>b[k-1]) return false;
    } else if (avg > b[k - 1]) {
        return false;
    } else {
        if (avg > b[k - 1]) return false;
        else {
            A.push(A.pop() + 1);
            console.log(A);
            abc(A, k);
            opr = opr + 1;
        }

        console.log("ans", ans);
    }
    return opr;
}
let b = [2, 5, 3];
console.log(abc(b, 2))