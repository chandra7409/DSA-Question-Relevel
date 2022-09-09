///Q.56/////////////////////
// Road Necessary
// Problem Statement
// There are N cities in Crossland connected by M unidirectional roads. The king of Crossland was a very wise man so he decided to inform all the citizens about the shortest path between any particular pair of cities.
// He particularly wants to know that for all ordered pairs of cities (i,j) that are directly connected by a road, is there any shorter path between (i,j) going through some other set of cities.
// Input Format:
//  First line contains two space separated integers N and M
//  Next M lines contain three space separated integers u, v, w, meaning there is a road from u to v of length w units.(u!=v and only a single road exists between u and v).
// Output Format :
//  In the first line print T, the total number of unordered pairs of cities such that there is a road from u to v but there is a shorter path between a and b passing through some set of cities.
// In the next T lines print the values of u and v, sorted in increasing order of u first and then v.
// Constraints:
// 1<N<=100
// 1<M<=(N^2-N)
// 1<u,v<=N
// 1<=w<=1e9
// Sample Input :
// 3 5
// 2 3 5
// 3 2 3
// 2 1 2
// 1 3 7
// 1 2 25
// Sample Output :
// 1
// 1 2
// Explanation :
// For the 5th direct road, (1->2) we can use another path (1->3->2) whose length is 10
// // 2.


/////solution is not fixed that this is right or not ////

function minnode(n, keyval,
    mstset) {
    let mini = Number.MAX_VALUE;
    let mini_index = 0;
    for (let i = 0; i < n; i++) {
        if (mstset[i] == false &&
            keyval[i] < mini) {
            mini = keyval[i];
            mini_index = i;
        }
    }
    return mini_index;
}

function findcost(n, city) {
    let parent = Array(n).fill(0);
    let keyval = Array(n).fill(0);
    let mstset = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        keyval[i] = Number.MAX_VALUE;
        mstset[i] = false;
    }
    parent[0] = -1;
    keyval[0] = 0;
    for (let i = 0; i < n - 1; i++) {
        let u = minnode(n, keyval, mstset);
        mstset[u] = true;
        for (let v = 0; v < n; v++) {
            if (city[u][v] > 0 &&
                mstset[v] == false &&
                city[u][v] < keyval[v]) {
                keyval[v] = city[u][v];
                parent[v] = u;
            }
        }
    }
    let cost = 0;
    for (let i = 1; i < n; i++)
        cost += city[parent[i]][i];

    console.log(cost);
}
let n1 = readline().split('').map(Number);
let city1 = readline().split('').map(Number);
findcost(n1, city1);