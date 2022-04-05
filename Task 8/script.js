/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.sum = function (num1, num2) {
        return num1 + num2;
    }
    this.subtraction = function (num1, num2) {
        return num1 - num2;
    }
    this.multiplication = function (num1, num2) {
        return num1 * num2;
    }
    this.division = function (num1, num2) {
        return num1 / num2;
    }
}

const calc = new Calculator();
console.log('sum ===', calc.sum(6, 2));
console.log('subtraction ===', calc.subtraction(6, 2));
console.log('multiplication ===', calc.multiplication(6, 2));
console.log('division ===', calc.division(6, 2));
