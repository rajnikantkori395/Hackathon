function sumMaxMin(a, b, c, d, e) {
  return Math.max(a,b,c,d,e) + Math.min(a,b,c,d,e);
}

console.log(sumMaxMin(100, 100, -200, 300, 0));
console.log(sumMaxMin(1, 3, 2, 4, 5));
console.log(sumMaxMin(-1000, -2000, -10, -120, -60));
