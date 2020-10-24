// bitwise operator OR
const a = 1 === 1 | 2 === 2 // 1
const b = 1 === 2 | 2 === 3 // 0
const c = 1 === 1 | 2 === 3 // 1
const d = 1 === 2 | 2 === 2 // 1
console.log(a, b, c, d)

const e = 1 === 1 || 2 === 2 // true
const f = 1 === 2 || 2 === 3 // false
const g = 1 === 1 || 2 === 3 // true
const h = 1 === 2 || 2 === 2 // true
console.log(e, f, g, h)

// bitwise operator AND (all results have to be true/0 to be true/0)
const i = 1 === 1 & 2 === 2 // 1
const j = 1 === 2 & 2 === 3 // 0
const k = 1 === 1 & 2 === 3 // 0
const l = 1 === 2 & 2 === 2 // 0
console.log(i, j, k, l)

const m = 1 === 1 && 2 === 2 // true
const n = 1 === 2 && 2 === 3 // false
const o = 1 === 1 && 2 === 3 // false
const p = 1 === 2 && 2 === 2 // false
console.log(m, n, o, p)



