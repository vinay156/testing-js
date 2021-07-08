const { TestWatcher } = require('jest')
const capitalize = require('./capitalize')

test('capitalize', () => {
    expect(capitalize("vishal")).toBe("Vishal")
})

test('capitalize', () => {
    expect(capitalize("")).toBe("")
})

test('capitalize', () => {
    expect(capitalize(4767)).toBe("ERROR: not a string")
})