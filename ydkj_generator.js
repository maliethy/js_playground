function *foo(){
    let x = yield 2
    z++
    let y = yield(x*z)
    console.log(x,y,z)
}

let z = 1

const it1 = foo()
const it2 = foo()
// *foo() 제너레이터를 실행할 이터레이터(it1, it2)를 마련한다. *foo() 인스턴스 2개를 마련했다. 

 let val1 = it1.next().value
 let val2 = it2.next().value
// 두 인스턴스에서 next()를 호출한다. yield에서 멈추고 yield 오른편에 있는 지정된 값 2를 각각 넘겨받는다.
// val1 = 2 , val2 = 2

  val1 = it1.next(val2* 10).value
//   val2*10은 2*10이고 이 값이 next() 호출 시 매개변수로 인스턴스 it1에 전달된다.
//   따라서 yield자리에 20를 넣어주어 let x = 20이 되고, z++로 z = 2가 된다. 
//   다음 yield인 let y = yield에서 멈추고 yield 오른편에 지정된 값 x*z가 next().value에 담긴다.
//   val1 = 20*2 = 40이 된다. 
  
  val2 = it2.next(val1*5).value
//  val1*5은 40*5이고 이 값이 next() 호출 시 매개변수로 인스턴스 it2에 전달된다. 
//  따라서 yield자리에 200를 넣어주어 let x = 200이 되고, z++로 z = 3가 된다. 
//  다음 yield인 let y = yield에서 멈추고 yield 오른편에 지정된 값 x*z가 next().value에 담긴다.
//  val2 = 200*3 = 600이 된다. 

   it1.next(val2/2)
  //val2/2가 next() 호출을 통해 yield에 전달되어 y = val2/2 = 300이 된다.
  //콘솔창에 20, 300, 3이 표시된다.
  
  it2.next(val1/4)
  //val1/4가 next() 호출을 통해 yield에 전달되어 y = val1/4 = 10이 된다.
  //콘솔창에 200, 10, 3이 표시된다.