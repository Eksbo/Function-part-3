'use script'
// Решим задачу на определение дружественных чисел.

// function getOwnDivisors(num) {
// 	let arr = [];
//     for (let i = 1 ; i < num ; i ++){
//         if ( num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr
// }

// function getSum(arr) {
// 	let sum = 0 ;
//     for (let i of arr){
//         sum += Number(i);
//     }
//     return sum
// }
// function isFreindly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1));
// 	let sum2 = getSum(getOwnDivisors(num2));
	
// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isFreindly(220, 284));

// Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в 
// заданном промежутке и возвращать их в виде двухмерного массива вида следующего вида:
// [ [220, 284], [1184, 1210], [2620, 2924] ]

// С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 3000.
// let res = []
// let arrRes = [] ;
// let result = []
// function getOwnDivisors(num) {
// 	let arr = [];
//     for (let i = 1 ; i < num ; i ++){
//         if ( num % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr
// }

// function getSum(arr) {
// 	let sum = 0 ;
//     for (let i of arr){
//         sum += Number(i);
//     }
//     return sum
// }
// function isFreindly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1));
// 	let sum2 = getSum(getOwnDivisors(num2));
	
// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// for (let i = 1 ; i <= 3000; i ++)
// {
//   res.push (getSum(getOwnDivisors(i)))
// }

// for (let k = 0 ; k < res.length ; k ++)
// {
// if( k+1 == getSum(getOwnDivisors(res[k])) && getSum(getOwnDivisors(k + 1)) == res[k])
// {
// arrRes.push(res[k])  
// }  
// }
// for (let i = 0 ; i < arrRes.length ; i ++ ){
// if (isFreindly(arrRes[i-1], arrRes[i])){ result.push([arrRes[i-1],arrRes[i]])}
// }

// console.log(result);

// Совершенное число - целое число, равное сумме всех своих собственных делителей 
// (то есть всех положительных делителей, отличных от самого числа). Сделайте функцию 
// getPerfect, которая будет находить совершенные числа в заданном диапазоне. Проверьте 
// работу функции в промежутке от 1 до 1000. 
    
// function getOwnDivisors(num) {
//     	let arr = [];
//         for (let i = 1 ; i < num ; i ++){
//             if ( num % i == 0){
//                 arr.push(i);
//             }
//         }
//         return arr
//     }
    
//     function getSum(arr) {
//     	let sum = 0 ;
//         for (let i of arr){
//             sum += Number(i);
//         }
//         return sum
//     }
//     let arr = [] ;
//     function getPerfect(a , b){
//         for (let i = a ; i <= b; i++)
//         {
// if ( i == getSum(getOwnDivisors(i))){
// arr.push(i)
// }
//         }
//         return document.write(arr) ;
//     }
//     getPerfect(1 , 1000)
//     console.log(getSum(getOwnDivisors(28)));

