///Q.36////////////////
// Dumb Jerry
// Problem Statement

// As usual, Jerry and Tom are fighting.Tom wants to prove that Jerry is Dumb, So he made a problem and asked jerry.
// Given a sequence A of size N, and an operation.
// In one operation you can pick an element either from the front or back of the Sequence and write it down and delete it from the array.
// Jerry has to perform the given operation until sequence A becomes empty.
// Tom wants the written sequence to be lexicographically maximum possible by performing the given operation on sequence A.
// Jerry can’ t solve the problem on his own.So you have to help him.
// Note: -
//     Sequence X of length N is lexicographically greater than Sequence Y of length N,
//     if there exist such i(1 <= i <= N), that Xi > Yi and
// for any j(1 <= j < i) Xi = Yi.

// Constraint
// • 1 <= N <= 105
// • 0 <= Ai <= 109
// • All input values are integer.
// Input Format
// • First - line contains N, length of the sequence A
// • Second line contains N space - separated integers denoting the sequence A.
// Output Format
// • In first print the lexicographically maximum sequence made by performing operations on sequence A
// Sample Input 1
// 3
// 3 1 2
// Sample Output 1
// 3 2 1

// Explanation of Sample 1

// For test case1

// We get sequence { 3, 1, 2 }
// if we
// Pick the element from the front of the sequence(3) and delete it from the original sequence { 1, 2 }
// Pick the element from the front of the sequence(3, 1) and delete it from the original sequence { 2 }
// Pick the element from the front of the sequence(3, 1, 2) and delete it from the original sequence {}
// We get sequence { 3, 2, 1 }
// if we
// Pick the element from the front of the sequence(3) and delete it from the original sequence { 1, 2 }
// Pick the element from the back of the sequence(3, 2) and delete it from the original sequence { 1 }
// Pick the element from the front of the sequence(3, 2, 1) and delete it from the original sequence {}
// We get sequence { 2, 3, 1 }
// if we
// Pick the element from the back of the sequence(2) and delete it from the original sequence { 3, 1 }
// Pick the element from the front of the sequence(2, 3) and delete it from the original sequence { 1 }
// Pick the element from the front of the sequence(2, 3, 1) and delete it from the original sequence {}
// We get sequence { 2, 1, 3 }
// if we
// Pick the element from the back of the sequence(2) and delete it from the original sequence { 3, 1 }
// Pick the element from the back of the sequence(2, 1) and delete it from the original sequence { 3 }
// Pick the element from the front of the sequence(2, 1, 3) and delete it from the original sequence {}
// Compare to other { 3, 2, 1 }
// is lexicographically largest.


//////solution for the c++ this problem/////////////////
#
include < bits / stdc++.h >
    using namespace std;
void KSwapMaximum(int arr[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        int indexPosition = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] > arr[indexPosition])
                indexPosition = j;
        }
        for (int j = indexPosition; j > i; --j)
            swap(arr[j], arr[j - 1]);
    }
}
int main() {
    int arr[] = { 1, 2, 3 };
    int n = sizeof(arr) / sizeof(arr[0]);

    KSwapMaximum(arr, n);

    // Print the final Array 
    for (int i = 0; i < n; ++i)
        cout << arr[i] << " ";
}