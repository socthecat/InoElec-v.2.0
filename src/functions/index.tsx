export const isPrime = (n: number) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false
    }
    return n > 1
  }
  
export const factorial = (n: number): number => (n < 2) ? 1 : factorial(n - 1) * n
export const fib = (n: number): number => n <= 1 ? n : fib(n - 1) + fib(n - 2)
export const isSorted = (arr: any[]) => arr.every((n, i, a) => !i || a[i - 1] <= n)
export const reverse = (str: string) => str.split('').map(str.split('').pop, str.split('')).join('')
export const isPalindrome = (str: string) => str.replace(/\s/g, '').toLowerCase() === str.replace(/\s/g, '').toLowerCase().split('').reverse().join('')
