var func3 = function (x) {
  // var args = [1, 2, 3, 4].slice(1);
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args);
};
func3(1, 2, 3, 4); // 3

function createArray(length) {
  var arr = new Array(length || 0),
    i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);

    while (i--) {
      console.log(args);
      return (arr[length - 1 - i] = createArray.apply(this, args));
    }
  }
  return arr;
}
var arr = createArray(2, 3, 4);
// console.log(arr);
