function test(n) {
  return n.trim().substr(n.lastIndexOf('00') + 2);
}
let a = test('5/17/2012 16:00:00	30.2084');

console.log(a);
