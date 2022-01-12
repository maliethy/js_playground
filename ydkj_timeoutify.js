import axios from 'axios';
function timeoutify(fn, delay) {
  //0.5초 후에 foo에서는 무조건 new Error('timeout')를 던진다?
  console.log(fn);
  let intv = setTimeout(function () {
    intv = true;
    fn(new Error('timeout'));
    // fn(false, result);
  }, delay);

  return function () {
    console.log('intv:', intv);
    if (intv) {
      clearTimeout(intv);
      console.log(this, arguments);
      fn.apply(this, arguments);
    }
  };
}

function foo(err, data) {
  if (err) {
    console.error('err', err);
  } else {
    console.log('data', data);
  }
}
const result = axios.get('https://httpbin.org/get');
if (result) {
  //axios요청에 대한 응답이 들어오면 timeoutify 실행
  console.log('result', result);
  timeoutify(foo, 500);
}
