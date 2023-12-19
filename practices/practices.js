// //Even numbers beetween 1 to 10




// // for(let a=0;a<11;a++){
// //     if(a%2==0){
// //         console.log(`${a}`)
// //     }
// // }
// // find largest of 3 number
// let a=parseInt(prompt("enter a value:"))
// let b=parseInt(prompt("enter b value:"))
// let c=parseInt(prompt("enter c value:"))
// if(a>b && a>c){
//      console.log(`a vlue is large`)
// }
// else if(b>a && b>c){
//     console.log(`b vlue is large`)
// }
// else{
//     console.log(`c vlue is large`)
// }
// let a1=parseInt(prompt("enter a1 value:"))
// let b1=parseInt(prompt("enter b1 value:"))
// let c1=parseInt(prompt("enter c1 value:"))
// let d1=parseInt(prompt("enter d1 value:"))
// if(a1>b1 && a1>c1 && a1>d1){
//     if(b1>c1 && b1>d1){
//         console.log(`b1 is second largest:${b1}`)
//     }

// }
// else if(b1>a1 && b1>c1 && b1>d1){
//     if(a1>c1 && a1>d1){
//         console.log(`a1 is second largest:${a1}`)


//     }
// }
// else if(c1>a1 && c1>b1 && c1>d1){
//     if(d1>a1 && d1>b1){
//         console.log(`d1 is second largest:${d1}`)
//     }
// }

// else {
//     console.log(`c1 is  second lorgest value:${c1}`)

// }
// // Check  the number is positive or negative
// // let num=parseInt(prompt("enter Number:")) 
// // if(num>0){
// //     console.log(`num is Positive:${num}`)
// // }
// // else if(num<0){
// //     console.log(`num is Negative:${num}`)
// // }
// // else{
// //     console.log(`num is  zero:${num}`)
// // }

// to find max value
// let arr1=[ 10,20,77,45,3,7,-56,87]
// let num=arr[0]
// for(i=0;i<arr1.length;i++){
//     if(arr1[i]>num){
//         num=arr1[i]
//     }

// }
// console.log(`the max value is:${num}`)

// // to find 2nd max  value in array
// let arr=[ 10,20,45, 77,3,7,-56,87]
// let num1=arr[0]
// let num2=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>num1){
//         num2=num1
//         num1=arr[i]
       
//     }else if (num1>arr[i]){
//         num2=arr[i]
//     }

// }
// console.log(`the  second value is:${num1,num2}`)


// let a=[1,2,3,5,7,6,4]
// for(let i of a){
//     let c=i**2
//     console.log(c)
// }

// how to convert sting int capitalization

// // Mahiboob K22:09
// const str = 'i have learned something new today';

// //split the above string into an array of strings 
// //whenever a blank space is encountered

// const arr = str.split(" ");

// //loop through each element of the array and capitalize the first letter.


// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }

// //Join all the elements of the array back into a string 
// //using a blankspace as a separator 
// const str2 = arr.join(" ");
// console.log(str2);

//last element 
// let str = 'najeer is good boy';
// let arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].slice("",-1)+ arr[i].charAt(0).toUpperCase() 

// }
// let str2 = arr.join(" ");
// console.log(str2);

//


// program to reverse a string
// function reverse_string(str){
//     let new_str=""
//     for(let i= str.length-1;i>=0;i--){
//     new_str+=str[i]    
//     }
//     return new_str
// }
// let a=prompt("enter a sting")
//     let b=reverse_string(a)

// console.log(b)



// multiple 2 for array
// let n=[1,3,5,2,7]
// for(let i=0;i<n.length;i++){
//     n[i]*=2
//     console.log(n[i])
// }
// let n=[1,3,5,2,7]
// console.log(n.reverse())

// let n=[1,3,5,2,7]
// for(let a of n){
//     if(n%2==0){
//         console.log("even number")
//     }
//     else{
//         console.log("odd number")
    
//     }

// }

//  To  check even or odd number
// function checknumber(num ){
//     if(num%2==0){
//         console.log("number is even")

//     }
//     else{
//         console.log("number is odd")
        
//     } 
// }
// checknumber(14)


// Alternate way(ternary Operator) for check even or odd number
// function number(num1){
// let a=(num1%2==0)? "number is even": "number is odd"
// console.log(a)
// }
// number(25)



//write a palidrome of string
// let str=prompt("enter string")
// let str1=str.split("") .reverse().join("")
// if(str==str1){
//     console.log(`the string is palidrome `)
// }else{
//     console.log(`the string is  not palidrome`)

// }

// let arr=[
//     {
//       sub:"maths",
//       marks:90
     
    
//     },
//     {
//       sub:"maths",
//       marks:70
     
    
//     },
//     {
//       sub:"maths",
//       marks:67
     
    
//     }
    
// ]

// let add=0 

// for(let i=0;i<arr.length;i++){
//     add=add+arr[i].marks 
   
// }  let avg=add/3
 
// console.log(add)
// console.log(avg)

// // find even number
// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let arr2=arr1.filter((num)=> num%2===0)
// console.log(arr2)








let a='iAmNajeer'
let b=a.split(/(?=[A-Z])/)
console.log(b)
for (let i=0;i<=b.length-1;i++){
   b[i]=b[i].toLowerCase().charAt(0)+b[i].slice(1)
}
let arr=b.join('_')
console.log(arr)

 



























    









