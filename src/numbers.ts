(() => {
  let productPrice = 100;
  productPrice = 200; //cualquier cosa que no sea el

  let productPrice2: number = 300;

  console.log(productPrice2);
  productPrice2 = productPrice2 + 1;

  let productInStock: number; // tenes que ponerle el tipo de forma explicita si lo le asignas el valor antes de ponerlo, la inferencia no

  console.log(productInStock); // pa que queres imprimir esto papa lindo


  if(productInStock){ //pa que quieres hacer eso omeee, te amo ts, estas seguro que quieres hacer un if?
    console.log('Hay stock');
  }

  let discount = parseInt('123') // un número, que loco


  if(discount< 200){
    console.log('paila');
  }


  let hex = 0xfff;
})();
