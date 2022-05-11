function test() {
  const promiseFunction = () =>
    new Promise((resolve) => setTimeout(() => resolve("result"), 1000));

  //   Array(10)
  //     .fill(0)
  //     .forEach(async () => {
  //       const result = await promiseFunction();

  //       console.log(result);
  //     });
  (async function forEach() {
    for (let i = 0; i < 11; i++) {
      const result = await promiseFunction();
      console.time("test");
      console.log(result);
      console.timeEnd("test");
    }
  })();
}
console.time("test");
test();
console.timeEnd("test");
