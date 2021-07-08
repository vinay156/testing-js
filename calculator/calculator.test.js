const calculator = require('./calculator')


it("add", ()=>{
    expect(calculator.add(1,5)).toBe(6)
})

it("substracte", ()=>{
    expect(calculator.substracte(1,5)).toBe(-4)
})

it("multiply", ()=>{
    expect(calculator.multiply(1,5)).toBe(5)
})

it("divide", ()=>{
    expect(calculator.divide(6,2)).toBe(3)
})

it("divide", ()=>{
    expect(calculator.divide("h","kl")).toBe("ERROR: Not a number")
})