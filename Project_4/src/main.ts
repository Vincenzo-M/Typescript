import {Account} from './Account';

const a1 = new Account("Mario","Biondi", 500);
const a2 = new Account("Lorenzo","Oliveri", 1000);

console.log(a1.toString());
console.log(a2.toString());

a1.sendMoney(100);
console.log(a1.toString());

a2.sendMoney(900);
console.log(a2.toString());