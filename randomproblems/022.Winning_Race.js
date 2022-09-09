// ////////////////////////////////Q.22///////////////////
// Winning Race
// Reshma is an athlete, she will be participating in the N number of race and each race having race[i] meter so she started the practicing
// for a final race and in practice session she completed race[i] in time[i] minutes.
// Find the race that will be recommended to Reshma based on the minimum time of completion in the practice session.

// Given a two - array race and time, race[i] having the racing meters and time[i] having the time taken to complete the race[i]

// Input Format

// First line contains race[i] space separated integers denoting the race in meters.
// Second line contains time[i] space separated integers denoting the completion of race[i] in minutes

// Output Format

// Output should be one line integer denoting the meter from the race[i]

// Constraints

// 0 <= race[i] <= 104
// 0 <= time[i] <= 104

// Sample Input 1

// 100 200 300 400 500
// 2 3 4 6 8
// Sample Output 1
// 300
// Explanation of Sample 1
// Explanation:

//     2 mins to complete 100 mtr race => 50 mtr in 1 min

// 3 mins to complete 200 mtr race => 66 mtr in 1 min

// 4 mins to complete 300 mtr race => 75 mtr in 1 min

// 6 mins to complete 400 mtr race => 66 mtr in 1 min

// 8 mins to complete 500 mtr race => 62 mtr in 1 min

// So the output is 300 mtr because 75 mtr is the maximum meter she can reach in 1 min

// Sample Input 2
// 100 200 300 400 500

// 2 5 7 9 14
// Sample Output 2
// 100
// Explanation of Sample 2
// 2 mins to complete 100 mtr race => 50 mtr in 1 min

// 5 mins to complete 200 mtr race => 40 mtr in 1 min

// 7 mins to complete 300 mtr race => 42 mtr in 1 min

// 9 mins to complete 400 mtr race => 44 mtr in 1 min

// 14 mins to complete 500 mtr race => 35 mtr in 1 min

// So the output is 100 mtr because 50 mtr is the maximum meter she can reach in 1 min


// function Winning(race, time) {
//     let win = [];
//     for (let i = 0; i < race.length; i++) {
//         win.push(Math.max(race[i] / time[i]));
//     }
//     let sum = Math.max(...win);
//     for (let i = 0; i < race.length; i++) {
//         if (race[i] % sum == 0) {
//             return race[i];
//         }
//     }
// }
// let race = [100, 200, 300, 400, 500];
// let time = [2, 3, 4, 6, 8];
// console.log(Winning(race, time));