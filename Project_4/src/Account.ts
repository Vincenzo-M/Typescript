export class Account {

    constructor (private name: string, private surname: string, private balance: number) {}


    sendMoney(howMany: number): string {
        if(this.balance - howMany >= 0)
            this.balance -= howMany;
            return "Operazione effettuata";   
    }


    toString(): string {
        return this.name + " " + this.surname + " " + "Balance: " + this.balance
    }

}