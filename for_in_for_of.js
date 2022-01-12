// Object.prototype.objCustom = function () {};
// Array.prototype.arrCustom = function () {};
let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log('iterable in', i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log('iterable of', i); // 3, 5, 7
}

const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};
object1.foo = 'bar';
console.log(Object.keys(object1)); //[ 'a', 'b', 'c', 'foo' ]
for (let i in object1) {
  console.log('in', i); //a,b,c, "foo"
}
for (let i in Object.keys(object1)) {
  console.log('Object.keys in', i); //0,1,2,3
}
// for (let i of object1) {
//   console.log('of', i);
// }
//TypeError: object1 is not iterable

for (let i of Object.keys(object1)) {
  console.log('Object.keys of', i); //a,b,c, "foo"
}
