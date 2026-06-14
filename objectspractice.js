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
studentDetails.grade=30//Inserting new attribute grade with value as new data
console.log(studentDetails)

studentDetails.age=40 //Update process nammal normally cheyarilla.
console.log(studentDetails)

//********************************
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

//**************************************************
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



























