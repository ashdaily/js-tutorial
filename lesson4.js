// use of typeof
const a = 1;
const b = "Donald Duck";
const c = 1.1;
const d = true;
const e = null;
const f = undefined;

console.log("a:", typeof(a))
console.log("b:", typeof(b))
console.log("c:", typeof(c))
console.log("d:", typeof(d))
console.log("e:", typeof(e))
console.log("f:", typeof(f))


typeof(a) === "number" ? console.log("this is a number") : console.log("this is not a number")