(() => {
  //crear tus propios tipos :0, como aliases, reutilización, esto no es tailwind, redundancia

  type UserID = string | number;

  let userID: UserID; //union types

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'Xl';
  let shirtSize: Sizes;

  function greeting(myText: UserID, size: Sizes) {
    if (typeof myText === 'string') {
      //esto es increible, te amo union types

      console.log('holaa, soy un texto, te saludo ' + myText.toLowerCase());
    } else {
      console.log(
        'ahora, no soy un texto' + 'soy un número y mi valor es: ' + myText
      );
    }
  }
  greeting(1111, 'M');
  //esto es brutal
})();
