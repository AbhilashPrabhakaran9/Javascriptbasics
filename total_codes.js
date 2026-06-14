//4-5-26
console.log("First day of programming")
x=17
console.log(x)

//************************************************
//5-5-26
let name="Milan"
console.log(name) //name is not equal to NAME. In js, these 2 are treated as different values. If i give console.log(NAME) Then i will get 
//NAME is not defined error.
name="Mithran" 
console.log(name) //Successfully overwrite the value from Milan to Mithran
//let name="Manasi" //Error
//console.log(name)

//let name="Mythri" //Error
//console.log(name)

var s=23
console.log(s)

s=32 //Reassigned successfully with var
console.log(s)

var s=43
console.log(s)//Redeclaration success with var

const w=56
console.log(w)

//const w=57
//console.log(w) //Error- Redeclaration failed

//w=58
//console.log(w) //Error - Reassignment failed

console.log(typeof w) 

let name1="ABHILASH"
console.log(typeof name1)

let c
console.log(typeof c) //Output is Undefined because c-kku value assign cheyunilla.

//********************************************
//6-5-26

const studentDetails //Aethu keyword venamenkillum use cheyaam - const, let, var
= {

id:18,
name:"ABHILASH",
age:39

}

console.log(studentDetails)
console.log(typeof studentDetails)
console.log(studentDetails.name)
console.log(studentDetails['age'])
studentDetails.grade=30 //Inserting new attribute grade with value as new data
console.log(studentDetails)

studentDetails.age=40 //Update process nammal normally cheyarilla.
console.log(studentDetails)
//**************************************

//ARRAYS
let sports = ["cricket","badminton","football"]
console.log(sports) //sports = ARRAY 
//Printing the array's values or content

//Oro specific values aayi kittan indexing use cheyaam in array. Indexing starts from 0 in array.
console.log(sports[1])

//Find the length of array
console.log(sports.length)

//Creating an array of json objects
let mynewarray = [
{
    name:"ABHI",
    age:25,
    mark:"A"
},

{
    name:"AKON",
    age:26,
    mark:"A+"

}
]

console.log(mynewarray) //mynewarray-lekku New 2 json objects created

//Inside array, Aadhyathae object-lae data kittan vendi
console.log(mynewarray[0].age) //1st object-lae specific proprty aaya age kitti.
console.log(mynewarray[1].mark) //2nd object-lae specific proprty aaya age kitti

//****************************************************************
//7-5-2026
//Using Generic data in array concept
let fruits=["Mango", "Pineapple","Grape"]
console.log(fruits[1]) //Getting one item

fruits.push("Apple") //Adding one item to end
console.log(fruits)

fruits.pop("Apple") //Removing one item from end or last
//fruits.pop() //Both above and this step are same
console.log(fruits)

fruits.splice(1,1) //Using splice built in function here for removing in between array's value or item/items. Splice is having 2 parameters.
// first 1 [Starting index] = index no 
// of item to delete , second 1 [Delete count] = How many items i have to delete
//Here 1,1 means pineapple , pineapple so it will remove pineapple only.
console.log(fruits)

//Eee oru array-il specific aayitulla oru value undo ennu nokkanam. For that includes enna built in function use cheyunnu.
console.log(fruits.includes("Mango"))

//FUNCTIONS
function addition() {
var x=10
var y=11
console.log(x+y)

} //From line 1 to 6 is called function definition

addition() //Calling or invoking function [FUNCTION CALL]

//OPERATORS
//ARITHMETIC OPERATORS
function calculator() {

let a = 39
let b = 56
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b) //returns quotient
console.log(a%b) //returns reminder


}
calculator()

//COMPARISON OPERATORS returns true or false
let a = 19
let b = 23
//console.log(a>b)
//console.log(a<b)
//console.log(a>=b)
//console.log(a<=b)

//Strict and Normal equal comparisons
let c=19
let d="19"
//console.log(c==d) //NORMAL EQUALS - only comparing values
//console.log(c===d) //STRICT EQUALS MODE - comparing both datatype and value
//console.log(c!=d)


//LOGICAL OPERATORS

//LOGICAL AND
console.log(a<b&&a==c) //2 conditions satisfy aakan vendi logical AND operator use cheyunnu
console.log(a<b&&a!=c) //2 condition-il oru condition fail aayal Logical AND failure aakum.

//LOGICAL OR 
console.log(a<b||a!=c) //Either of the condition satisfied aayal mathi

//CONDITIONAL STATEMENTS
/*let age = 6

if(age>54){
    console.log("Eligible to vote")
}

else {
    console.log("Not Eligible")
}*/
//*********************** 

let marks = 81

if(marks>90)
{
    console.log("A+")
}

else if(marks>60 && marks<=90){
    console.log("B+")
}

else{
    console.log("FAILED")
}








