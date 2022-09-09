//////Q.52//////////
// ct
// Problem Statement:
// Given an array A of length, N. Find the product of A[i] * A[j]  for all 1 <= i <= j <= N. 
// Input Format:
// First-line contains an integer N, length of the array,
// The next line contains N space-separated integers, the array elements.
// Output Format
// Print the product. As the product can be very large print in modulo 10^9+7.
// Constraints:
// 1<= N <= 5*10^5
// 0<= A[i] <= 10^9
// Sample Input
// 3
// 1 2 3
// Sample Output :
// 1296
// Explanation of Sample :
// (1*1) * (1*2) * (1*3) * (2*2) * (2*3) * (3*3) = 1296



///solution for this //
// process.stdin.resume(); // A Readable Stream that points to a standard input stream (stdin)
// process.stdin.setEncoding('utf-8'); // so that the input doesn't transform

// let inputString1 = "";
// let inputString = "";
// let currentLine = 0;

// process.stdin.on('data', function (userInput) {
//     inputString1 = inputString1 + userInput; // taking the input string
// });

// process.stdin.on('end', function(x) {
//     inputString1.trim();
//     inputString1 = inputString1.split("\n"); // end line
//     for(let i = 0; i< inputString1.length ; i++ ) {
//         inputString += inputString1[i].trim() + ' ';
//     }
//     inputString.trim();
//     inputString = inputString.split(" ");
//     main();
// });

// function readline() {
//     let result = inputString[currentLine++];
//     return parseInt(result); // change when you want to use strings, according to the problem
// }
// function main() {	
// 		let N = readline();

// 	 console.log(abc(N));
//         }
// function abc(N) {
//    //write your logic here


// // function abc(n){
//     var A=[]
//   for(let i=1;i<=N;i++){
//    A.push(i)
//   }
// //   console.log(A)
//   var ans=1;
//     for(let i=0;i<N;i++){
//         for(let j=i;j<N;j++){
//             // console.log(A[i],A[j])
//             // console.log(A[i]*A[j])
//        ans=ans*A[i]*A[j]
//     //    console.log(ans)     
//         }
//         // console.log(ans)     

//     }
//    return ans %(1000000000+7);
// }