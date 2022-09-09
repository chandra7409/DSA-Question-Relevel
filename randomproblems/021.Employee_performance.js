// //Q.21.////////////////////////////
// Employee Performance
// As a Relevel company they have to give a year end rating to their team of 5 employee(A, B, C, D, E) and the rating scale has to be from 1 to 5. They will be giving the rating based on the hours of work by each employee.If the employee working
// for more hours, they will give 1 st rating to that employee.
// Given the employee login time as Login[i] and logout time as Logout[i] times, the task is to sort the employee based on their ratings.
// Input Format
// First line contains Login[i] space separated integers denoting the employee login time.
// Next line contains Logout[i] space separated integers denoting the employee logout time.
// Output Format
// Output should be an employee(A B C D E) sort based on the performance
// Constraints
// 1 <= Logini, Logouti <= 24
// Sample Input 1
// 1 8 13 10 15

// 9 16 23 16 19

// Sample Output 1

// C A B D E

// Explanation of Sample 1
// Input: Login[i] = [1, 8, 13, 10, 15]

// Logout[i] = [9, 16, 23, 16, 19]

// Output: C A B D E

// Explanation:

//     From the above input

// A working
// for 8 hours(9 - 1)

// B working
// for 8 hours(16 - 8)

// C working
// for 10 hours(23 - 13)

// D working
// for 6 hours(16 - 10)

// E working
// for 4 hours(19 - 15)



// So, the output is C A B D E or C B A D E, because both A and B work
// for 8 hours



// Sample Input 2

// 10 8 1 10 14

// 19 16 18 24 24

// Sample Output 2

// C D E A B



// Explanation of Sample 2



// Input: Login[i] = [10, 8, 1, 10, 14]

// Logout[i] = [19, 16, 18, 24, 24]

// Output: C D E A B

// Explanation:

//     From the above input

// A working
// for 9 hours(19 - 10)

// B working
// for 8 hours(16 - 8)

// C working
// for 17 hours(18 - 1)

// D working
// for 14 hours(24 - 10)

// E working
// for 10 hours(24 - 14)
// So, the output is C D E A B

// //solution  ///
// function driver(logins, logouts, employees) {
//     var totalHours = []
//     for (var i = 0; i < logins.length; i++) {
//         totalHours.push(logouts[i] - logins[i])
//         employees[i] = [employees[i], logouts[i] - logins[i]]
//     }
//     employees.sort((a, b) => b[1] - a[1])
//     console.log(employees)
// }
// var logins = [1, 8, 13, 10, 15]
// var logouts = [9, 16, 23, 16, 19]
// var employees = ['A', 'B', 'C', 'D', 'E']
// driver(logins, logouts, employees);