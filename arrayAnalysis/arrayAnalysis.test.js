const { TestWatcher } = require('jest')
const arrayAnalysis = require('./arrayAnalysis')

test ('arrayAnalysis', ()=> {
    expect(arrayAnalysis([1,4,3,8])).toEqual([1,8,4,4])
})

test ('arrayAnalysis', ()=> {
    expect(arrayAnalysis([1,4,3,"a"])).toBe("Error: not a number")
})