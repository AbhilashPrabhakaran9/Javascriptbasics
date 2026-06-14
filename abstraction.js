class Atmmachine {

balance = 2000000 //Global variable
//let or var mandatory alla inside class, but outside class, let or var mandatory aanu.

constructor(amount) //Oro thavanayum atm machine enna classinae access cheyumbol different amounts aanu deposit cheyunnathu.
//Ella amount-neyum orupolae accessible aakan vendittannu constructor-il vannittu amount koduthathu.
//amount = deposit amount = constructor's parameter or amount is just a variable name for the incoming value
//Query fro Jiji - Ethu function-ludae pass cheythal porae? Madam said - Function through pass cheyaam, but object through pass 
//cheyyan reason enthaanu vechal athoru standard practice aanu. That means nammal pass cheyunna information kodduthalum
//object level-il pass cheyuka ennu parayunnathu oru standard practice aanu. For example, 
{
this.amount = amount
}

#deposit() {
    return (this.balance + this.amount)
}

getbalance() {
let total = this.#deposit()
console.log("Total is " + total)
}

}

const atm = new Atmmachine(116000)
atm.getbalance()