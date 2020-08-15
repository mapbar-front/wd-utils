/**
 * 加法函数解决精度丢失问题
 * @param { number } arg1
 * @param { number } arg2
 */
function add (arg1, arg2) {
  let r1, r2
  try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
  const m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}
/**
 * 减法函数解决精度丢失问题
 * @param { number } arg1
 * @param { number } arg2
 */
function subtraction (arg1, arg2) {
  let r1, r2
  try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
  const m = Math.pow(10, Math.max(r1, r2))
  const n = (r1 >= r2) ? r1 : r2
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
}
/**
 * 除法函数解决精度丢失问题
 * @param { number } num1
 * @param { number } num2
 */
function division (num1, num2) {
  let t1, t2
  try {
    t1 = num1.toString().split('.')[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = num2.toString().split('.')[1].length
  } catch (e) {
    t2 = 0
  }
  const r1 = Number(num1.toString().replace('.', ''))
  const r2 = Number(num2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}
/**
 * 乘法函数解决精度丢失问题
 * @param { number } num1
 * @param { number } num2
 */
function multiplication (num1, num2) {
  let m = 0; const s1 = num1.toString(); const s2 = num2.toString()
  try { m += s1.split('.')[1].length } catch (e) { console.log(e) }
  try { m += s2.split('.')[1].length } catch (e) { console.log(e) }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
export default {
  add,
  subtraction,
  division,
  multiplication
}
