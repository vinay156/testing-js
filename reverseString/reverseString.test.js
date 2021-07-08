const { TestWatcher } = require('jest')
const reverseString = require('./reverseString')

test ('reverseString', ()=> {
    expect(reverseString("vinay")).toBe("yaniv")
})

test ('reverseString', ()=> {
    expect(reverseString(1234)).toBe("4321")
})

// test ('reverseString', ()=> {
//     expect(reverseString(1762--908)).toBe("ERROR: Not a string")
// })