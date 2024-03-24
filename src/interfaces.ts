(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: String;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Shirt',
    createdAt: new Date(),
    stock: 100,
    size: 'M',
  });

  addProduct({
    title: 'Shirt2',
    createdAt: new Date(),
    stock: 300,
  });

  console.log(products);
})();
