(() => {
  // null != undefined

  let myNumber: number;

  let myName: string;

  let myNull: null = null;

  let myUndefined: undefined = undefined;

  //quedan de tipo any

  //hay casos donde si o si inicie como null

  let myNumber2: number | null = null; //hasta que no carga el template el valor es nulo, es posible que hayan cosas que sea nulas

  myNumber2 = 12;

  let myString2: number | undefined = undefined;
  myString2 = 14;

  function hi(name: string | null) {
    let hello: string = 'Hola ';

    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  }

  //optional chaining
  function hiV2(name: string | null) {
    let hello: string = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';

    console.log(hello);
  }
  hi('Jose');
  hi(null);
})();
