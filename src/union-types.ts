(() => {
  let userID: string | number; //union types
  //acotar la cantidad de tipos que soportas
  userID = 123;
  userID = 'Holaa, Jose';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      //esto es increible, te amo union types

      console.log('holaa, soy un texto, te saludo ' + myText.toLowerCase());
    } else {
      console.log(
        'ahora, no soy un texto' + 'soy un número y mi valor es: ' + myText
      );
    }
  }

  greeting('Jose Luis');
  greeting(123);
})();
