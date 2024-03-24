(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (userData: { email: string; password: string }) => {
    console.log(userData.email, userData.password);
    //que no importe la posición
  };

  const userData = {
    email: 'wildchamo',
    password: '1234',
  };
  login(userData);

  const products: any[] = [
    // {
    //   title: 'Shirt',
    //   createdAt: new Date(),
    //   stock: 100,
    //   size: 'M',
    // },
    // {
    //   title: 'Shirt',
    //   createdAt: new Date(),
    //   stock: 100,
    //   size: 'M',
    // },
    // {
    //   title: 'Shirt',
    //   createdAt: new Date(),
    //   stock: 100,
    //   size: 'M',
    // },
  ];

  const addProduct = (data: {
    title: String;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
