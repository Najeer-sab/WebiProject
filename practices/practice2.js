//hof Practice
//  let array=["yellow","green","red","blue","gray","black"]
//  let modified_array=array.filter((el) => el.includes("a"))
//  console.log(modified_array)


//  let array1=["yellow","green","red","blue","gray","black"]
//  array1.forEach((el) => console.log(el.toUpperCase()))
//  console.log(array1)




// Factorial of number

// function fact(num){
//     if(num==1 ){
//         return 1

//     }else{
//         return num* fact(num-1)
//     }
// }
// console.log(fact(4))

//or given range

// let num= 5
// let initial_value=1
// if(num<0){
//     console.log(`${n} negative number can't give factrorial`)
// }else{
//     for(i=1;i<=num;i++){
//         initial_value*=i
//         console.log(`${initial_value} is factrorial of ${i}`)

//     }
// }
//prime number
// let num= parseInt(prompt("enter a number"))
// if(num<=1){
//     console.log(`${num} number is not prime number`)
// }
// else{
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             console.log(`${num} not is a number`)
//             break;
//         }else{
//             console.log(`${num} is a  prime number`)

//         }
//     }

// }

// fibonacci
// let number=10
// let a=0
// let b=1
// console.log(a)
// console.log(b)


// for(let i=0;i<=number;i++){
//     let term=a+b
//     a=b
//     b=term
//     console.log(term)
// }



// // Count
// let arr1=[1,2,3,4,4,4,4,6,78,]
// let letter=3
// let counter=0
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]==letter){

//         counter++

//     }
// }
// console.log(counter)

// let num=8
// let a=0
// let b=1
// for(let i=1;i<=num;i++){
//     let term=a+b
//     a=b
//     b=term
//     console.log(term)
// }

// let arr=[1,3,4,5,6,77,3,2,5,67,112,3,,4,1]
// let count={}
// for(let el of arr){
//     if(count[el]){
//         (count[el])+=1

//     }
//     else{
//         (count[el])=1
//     }

// }
// console.log(count)



// function table(n){
//     for(let i=1;i<=10;i++){

//       console.log(` ${n} * ${i}=${n*i}` )  
//     }
// }
// table(5)
// function sum(n){
//    let sum=0
//    for(let i=1;i<=n;i++){
//     sum+=i


//    }
//    console.log(sum)

// }
// sum(10)
//  let sum=0
// for(let i=11;i<=30;i+=2){
//     sum+=i

// }
// console.log(sum)



// function celsius_far(cel){
//     let far= (9/5 )*(cel)+32
//     console.log(far)
// }
// celsius_far(0)


// let sum=100
// let array_sum=[10,20,40,10,30,2,0,5]
// let sumnum=array_sum.reduce((init,value)=> init+value,sum)
// console.log(sumnum)




// avg of elements present in array
// let sum=0

//  function sum_array(arr){
//     let n=arr.length
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum/n

//  }
//  let arr=[10,20,30,40]
//  let a= sum_array(arr)  
//  console.log(a)
//  console.log(a)



// let  a=new Date().getMilliseconds()
// console.log(a)








// let arr=[10,45,9,13,688,67]
// function maximum_value() {
//     var num1 = arr[0]
//     var num2 = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>num1) {
//             num1 = num2
//             num2 = arr[i]

//         }else if(arr[i] < num2){
//             num2=arr[i]

//             }
//         }
//     }
//     console.log( num1,num2)


// maximum_value()

// let arr=[10,60,50,60,40,5,8]
// function secound_min(){
//     let min=arr[0]
//     let sec_min=arr[0]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=sec_min
//             sec_min=arr[i]
//         }
//     }return sec_min
// }
// console.log(secound_min())


// second min
// let n=[10,30,45,1,3,34,55]
//        let sec_min=n[0]
//        let min=n[0]
//        for(let i=0;i<n.length;i++){
//         if(n[i]<min){
//             min=sec_min
//             sec_min=n[i]

//         }
//         else if(n[i]<sec_min){
//             sec_min=n[i]

            
//         }
//        }
//        console.log(sec_min)




// mahi
// let a = [10, 20, 30, 40, 50, 60]
// let max = a[0]
// let sec_max = a[0]
// let min = a[0]
// let sec_min = a[0]
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//         sec_max = max
//         max = a[i]
//     }
//     if (a[i] < min) {
//         sec_min = min
//         min = a[i]
//     }
// }
// console.log(`${max},is largest value`)
// console.log(`${sec_max},is 2nd largest value`)
// console.log(`${min},is lowest value`)
// console.log(`${sec_min},is 2nd lowest value`)




//camel to snake
// let a="myNameIsNazeer"
// let b=a.split(/(?=[A-Z])/)
// let c=b.join('_').toLowerCase()
// console.log(c)
// or
// function check(str){
//     let a=str.split() .join("_").toLowerCase()
//     console.log(a)
// }
// check("mayNameIsNazeer")



// snake to camel
// function snakeToCamel(str){
//     return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
// }

// console.log(snakeToCamel('hello_world')); 



let arr=[1,4,55,78,22,1,1,4,4,55]
function remove(){
    var  count={}
    for(var a of arr){
        if(count[a]){
            count[a]+=1
        }
        else{
            count[a]=1
        }  
    }
    console.log(count)
}remove()



let a=0
let b=1
console.log(a)
console.log(b)
let net_term=a+b
function fib( number){
    for(let i=0;i<number;i++){
        let net_term=a+b
        a=b
        b=net_term
        console.log(net_term)
    }
}
fib((10))


// function snakeToCamel(str){
//     return str.replace(/[^a-zA-Z0-9]+(.)/g, ( chr) => chr.toUpperCase());
// }

// console.log(snakeToCamel("hello_world"));


// or
function snakeToCamel(str){
    let n=str.replace (/(_\w)/g, m=>m.toUpperCase().substr(1))
    console.log (n)
   }
   snakeToCamel("hello_world")









// let arr=[1,2,10,10,34,2,56,78,11,23,45]
// let count={}
// for(let a of arr){
//     if(count[a]){
//         count[a]+=1
//     }
//     else{
//         count[a]=1
//     }
// }
// console.log(count)
function cameltosnake(str){
    let ar=str.split(/(?=[A-Z])/)
    let n=ar.join("_").toLowerCase()
    return n
}
console.log(cameltosnake("najeerSab"))
/


// .then(res=> res.json())
// .then(data=> data.forEach(element => {
//     console.log(`${element.title}`)
// }))


fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>data.forEach(element => {
    console.log(`${element.title}`)
    
}))

// call apply bindm 


// let person={
//     full_name:function(age){
//         console.log(this.fname+""+this.lname +age)
//     }
// }
// let person1={
//     fname:"najeer",
//     lname:"sab"

// }
// let person2={
//     fname:"Galeb",
//     lname:"sab"

// }

// person.full_name.call(person1,45)
// person.full_name.apply(person1,[45])
// let a=person.full_name.bind(person2,78)
// a()

// <!--   
//   <input type="text" placeholder="UserName" class="form-control mt-4 " id="a1">
//     <input type="password" placeholder="password" class="form-control mt-4" id="b1">
//     <button type="submit" onclick="mybutton()" class="btn btn-primary mt-4" > Login</button>
//     <p id="para"></p>
//      <script>
//       function mybutton(){
//             let a=document.getElementById('a1').value
//             let b=document.getElementById('b1').value
        
//    alert(  document.getElementById('para').innerHTML+='user:' + a+ "   " + 'password:'+b)

//      sonsole.log(a)
//      sonsole.log(b)
//         }
//     </script>   -->




// // function hello(){
// //     for(let i=0;i<=10;i++){
// //         console.log(`the numbers are:${i}`)
// //     }
// // }
// // setTimeout(hello, 2000)


// setTimeout((()=>{
//     for(let i=0;i<=10;i++){
//         console.log(i)
//     }
// }), 2000)





 //print the number 1 t0 10 after 1sec delay
 for(let i=1;i<=10;i++){
    setTimeout(()=> console.log(i),1000*i)
}


// find the length of last word in string
function lastWord(s){
    if (s.length === 0){
        return 0
    }else{
        let word=s.split(" ")
        let a=word[word.length-1].length
        return a;
    }

}
console.log(lastWord("hello nazeer how are  you najeersab"))

// sum of digits
function sumOfValues(num){
    let sum=0
    num.toString().split("").forEach(digit => {    // here we can map method
        sum+=parseInt(digit)
        
    });
    return sum
}
console.log(sumOfValues(1234))


//summing individual number in array // i/p: [123,456,123] o/p:[6,15,6]

let arr1=[123,456,567,789]
let resultArr=arr1.map(el=> el.toString().split("") .reduce((sum,a)=>sum+ +a,0))
console.log(resultArr)

a


function returnPromises() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Promise Executed");
        resolve("Sample Data");
      }, 1000);
    });
  }
  
  // declaring async function
  async function Data() {
    var array = ['hi',1,2,3,4];
    var getPromise = await returnPromises();
    console.log(array);
  }
  
  Data();
  
  // first letter capital
//   let a=["red","green","blue","black"]
//   let  c= []
//   for(let i=0;i<a.length;i++){
//       let m=a[i].toUpperCase().charAt(0)+a[i].slice(1)
//       c.push(m)
  
  
//   }
//   console.log(c)
  
  
  
  
  
  



// let arr=[
//     1,[2,3],[9,10],[23,45,67,89,80]
// ]
// console.log(arr.flat())
// or
// let a=arr.reduce((acc,curVal)=>{
//     return acc.concat(curVal)
// },[])
// console.log (a)

function flat(arr){
    var a=  arr.reduce((acc,curVal)=>{
        return acc.concat(curVal)
},[])
console.log (a)
}
console.log(flat([2,[2,3],[4,5,7,8]]))





 



// flattening of array

function flatArr(arr){
    return arr.reduce((acc,el)=> Array.isArray(el) ? acc.concat(flatArr(el)): acc.concat(el),[])
 }
 console.log(flatArr([10,2,[34,24,[2,56,7,89,[89,87],67],100,[45,34],45]]))




 // find the largest number in subarray

 function largestOfFour(mainArray) {
    return mainArray.map(function (subArray){
      return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
        return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      }, 0);
    });
  }
 console.log( largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
