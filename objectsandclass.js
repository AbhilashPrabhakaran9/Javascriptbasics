class Learn {

//Within the class-il enthu kodukunno athu classintae property aanu
//contents of class - Here inside the class, i can give variables, functions, constructors

//let chapternumber = 3 //An attribute created with value [As per madam, right now ee code remove cheyaan paranju]

constructor(name) //constructor is a special function
//name = constructor's parameter or name is just a variable name for the incoming value
{

    this.name=name
}

display() {

    console.log(this.name)
}



}

const file1 = new Learn("Oops") //Object creation for the class Learn

console.log(file1.name)
file1.display()