///Q.41//////////////////////////.
// Problem Statement
// You are given an integer K and Q queries.In each query you have to find the sum of first N natural numbers
// by taking the powers of K with negative sign.Power of K means K0, K1, K2....and so on.

// For Example,
// if N = 5, K = 2 then sum will be - 1 - 2 + 3 - 4 + 5, powers of K here are 2०, 2, 2².


// Constraints● 
//1 <= Q <= 2 * 105
//● 1 <= N,
//K <= 109● All input values are integers.
// to store power of k
power = Array(31).fill(0);

// to store presum of the power of k's
pre = Array(31).fill(0);

// function to find power of k
let PowerOfK = (k) => {
    // to store power of k
    let x = 1;
    for (let i = 0; i < 31; i++) {
        power[i] = x;
        x *= k;
    }

    // to store pre sum
    pre[0] = 1;
    for (let i = 1; i < 31; i++)
        pre[i] = pre[i - 1] + power[i];
}

// Function to find the sum
let Sum = (n) => {
    // first store sum of
    // first n natural numbers.
    let ans = n * (n + 1) / 2;

    // find the first greater number than given
    // number then minus let of this
    // from answer
    for (i = 0; i < 31; i++) {
        if (power[i] > n) {
            ans -= 2 * pre[i - 1];
            break;
        }
    }
    return ans;
}

// Driver code
// function call
PowerOfK();
let n = 4;

// function call
console.log(Sum(n));