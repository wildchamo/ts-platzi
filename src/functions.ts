(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProducttoJSON(
    title: String,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product = createProducttoJSON('Shirt', new Date(), 100, 'M');

  console.log(product);

  const createProducttoJSONV2 = (
    title: String,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const productV2 = createProducttoJSONV2('Shirt', new Date(), 100);

  console.log(productV2);
})();
