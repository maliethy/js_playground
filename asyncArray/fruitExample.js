const fruitBasket = {
  apple: 10,
  banana: 3,
  kiwi: 0,
};

const fetchData = (req) =>
  new Promise((resolve) => setTimeout(() => resolve(fruitBasket[req]), 5 * 60)); //비동기 작업이 무조건 성공한 경우만 가정하므로 바로 resolve(...)를 호출

const getFruitLength = async (fruit) => {
  return fetchData(fruit);
};

const getFruitLengthSync = async () => {
  console.log("Start");

  const result1 = await getFruitLength("apple");
  console.log(result1);

  const result2 = await getFruitLength("banana");
  console.log(result2);

  const result3 = await getFruitLength("kiwi");
  console.log(result3);

  console.log("End");
};

getFruitLengthSync();

const fruitsToGet = ["apple", "banana", "kiwi"];
