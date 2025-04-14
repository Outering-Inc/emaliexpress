import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int
}
// PROMPT: [ChatGTP] create toSlug ts arrow function that convert text to lowercase, remove non-word,
// non-whitespace, non-hyphen characters, replace whitespace, trim leading hyphens and trim trailing hyphens

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

    const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
      minimumFractionDigits: 2,
    })
    export function formatCurrency(amount: number) {
      return CURRENCY_FORMATTER.format(amount)
    }
    
    const NUMBER_FORMATTER = new Intl.NumberFormat('en-US')
    export function formatNumber(number: number) {
      return NUMBER_FORMATTER.format(number)
    }   

    // PROMPT: [ChatGTP] create round2 ts arrow function that round number to 2 decimal
    export const round2 = (num: number) =>
      Math.round((num + Number.EPSILON) * 100) / 100
    
    // PROMPT: [ChatGTP] create generateId ts arrow function that generate random id for items in the shopping cart
    export const generateId = () =>
      Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)).join('')
    