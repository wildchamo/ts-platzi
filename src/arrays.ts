(() => {
  let prices = [1, 2, 3, 4, 5, '', true];

  let products = ['hola', true];

  let mixed: (string | number | boolean | Object)[] = [1, 'hola', true];

  let numbers = [1, 2, 3, 4, 5];

  numbers.map((number) => number * 2);
})();
