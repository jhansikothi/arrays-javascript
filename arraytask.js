/*1.Write a code snippet to find the length of an array.*/
var bikes=["KTM","Hero honda","splendar","TVS","Activa","shine","Apache","pulsar"];
var lenghtofbikes=bikes.length;
console.log(bikes)
console.log(lenghtofbikes);
/*2.How do you add an element to the end of an array?*/
bikes.push("bullet")
console.log(bikes)
/*3.How do you remove the last element from an array?*/
bikes.pop();
console.log(bikes)
/*4.How do you add an element to the beginning of an array?*/
bikes.unshift("bullet","scooty")
console.log(bikes)
/*5.How can you remove the first element from an array?*/
bikes.shift();
console.log(bikes)
/*6.How do you reverse the elements in an array?*/
var reverse=bikes.reverse()
console.log(reverse)
/*7.How can you find the index of a specific value in an array?*/
console.log(bikes.indexOf("Activa"))
/*8.How can you check if a certain value exists in an array?*/
console.log(bikes.includes("pulsar"))
/*9.How can you sort the elements of an array in ascending order?*/
var sort=bikes.sort();
console.log(sort)
/*10.How can you convert an array to a string using commas as separators?*/
var str="hero honda"
console.log(str.split( " "))
/*Questions with Multiple Array Methods:
1.Write a code snippet that adds an element to the end of an array, then removes the first element.*/
var fruits=["banana","grapes","orange","mango"];
fruits.push("kiwi")
console.log(fruits)
fruits.shift();
console.log(fruits)
/*2.How can you reverse an array and then join the elements into a string?*/
var array=["java","python","php","javascript","nodejs"]
var rev=array.reverse();
console.log(rev)
var join=rev.join("")
console.log(join)
/*3.Write a code that first sorts an array in ascending order, then removes the last element.*/
var fruits=["banana","grapes","orange","mango"];
var sort=fruits.sort();
console.log(sort)
fruits.pop();
console.log(fruits)
/*4.How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?*/
var fruits=["banana","grapes","orange","mango"];
fruits.unshift("papaya","jackfruit")
fruits.shift();
console.log(fruits);
var length=fruits.length;
console.log(length)
/*5.How do you combine two arrays, sort the combined array, and then remove the last element?*/
var std=["ram","charan","sai","pavan"];
var dept=["janu","aravind","tej"];
var concat=std.concat(dept)
console.log(concat)
var sort=concat.sort();
console.log(sort)
sort.pop();
console.log(sort)

/*                        RESEARCH
SPLICE:
The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.

example: const fruits = ["Banana", "Orange", "Apple", "Mango"];
         fruits.splice(2, 0, "Lemon", "Kiwi");
         
MAP:
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.   */      






