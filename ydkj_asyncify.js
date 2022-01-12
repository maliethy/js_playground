import axios from 'axios';
function asyncify(fn) {
  let orig_fn = fn,
    intv = setTimeout(function () {
      console.log('intv', intv);
      intv = null;
      console.log('fn:', fn);
      if (fn) {
        console.log('hi');
        fn();
      }
    }, 0);
  fn = null;
  return function () {
    if (intv) {
      console.log('intv');
      fn = orig_fn.bind.apply(orig_fn, [this].concat([].slice.call(arguments)));
      console.log(this, arguments);
      fn.apply(this, arguments);
    } else {
      console.log('orig_fn');
      orig_fn.apply(this, arguments);
    }
  };
}

function result(data) {
  console.log('a:', a);
}
let a = 0;
const res = axios.get('https://httpbin.org/get');
if (res) {
  // axios요청에 대한 응답이 들어오면 asyncify 실행
  console.log('res', res);
  asyncify(result);
}

a++;

// let test = setTimeout(function () {
//   console.log('test');
// }, 0);
