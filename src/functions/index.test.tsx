import {isPrime, factorial, fib, isSorted, reverse, isPalindrome} from './index'

describe('test functions', () => {
    describe('isPrime', () => {
        test('Number 7 is prime', () => {expect(isPrime(7)).toBe(true)})
        test('Number 4 is not prime', () => {expect(isPrime(4)).toBe(false)})
    })
    describe('factorial', () => {
        test('Factorial of 5 is 120', () => {expect(factorial(5)).toBe(120)})
        test('Factorial of 0 is 1', () => {expect(factorial(0)).toBe(1)})
    })
    describe('fib', () => {
        test('3rd number in fibonacci sequence is 2', () => {expect(fib(3)).toBe(2)})
    })
    describe('isSorted', () => {
        test('Array [0, 3, 6] is sorted', () => {expect(isSorted([0, 3, 6])).toBe(true)})
        test('Array [0, 3, 6, 2] is not sorted', () => {expect(isSorted([0, 3, 6, 2])).toBe(false)})
    })
    describe('reverse', () => {
        test('"nanachi" reversed is "ihcanan"', () => {expect(reverse('nanachi')).toBe('ihcanan')})
    })
    describe('isPalindrome', () => {
        test('"racecar" is a palindrome', () => {expect(isPalindrome('racecar')).toBe(true)})
        test('"nanachi" is not a palindrome', () => {expect(isPalindrome('nanachi')).toBe(false)})
    })
})
