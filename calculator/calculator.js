const calculator = {
    add (a,b)  {
        if(typeof a !== 'number' || typeof b !== 'number') return "ERROR: Not a number";
        return a+b;
    },
    substracte (a,b) {
        if(typeof a !== 'number' || typeof b !== 'number') return "ERROR: Not a number";
        return a-b;
    },
    multiply (a,b) {
        if(typeof a !== 'number' || typeof b !== 'number') return "ERROR: Not a number";
        return a*b;
    },
    divide (a,b) {
        if(typeof a !== 'number' || typeof b !== 'number') return "ERROR: Not a number";
        return a/b;
    }
}

module.exports = calculator

// console.log(calculator.add(1,3))