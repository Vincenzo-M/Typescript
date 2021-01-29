"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(name, surname, balance) {
        this.name = name;
        this.surname = surname;
        this.balance = balance;
    }
    Account.prototype.sendMoney = function (howMany) {
        if (this.balance - howMany >= 0)
            this.balance -= howMany;
        return "Operazione effettuata";
    };
    Account.prototype.toString = function () {
        return this.name + " " + this.surname + " " + "Balance: " + this.balance;
    };
    return Account;
}());
exports.Account = Account;
