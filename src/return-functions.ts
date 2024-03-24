(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;

    prices.forEach((priceIten) => {
      total += priceIten;
    });

    return `el valor total es ${total}`;
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal([1, 6, 2, 3, 4, 5, 5]);
    console.log('el total es ' + rta);
    //definimos que la función no retorna nada! acuerdos con las funciones
  };

  printTotal([1, 6, 2, 3, 4, 5, 5]);
})();
