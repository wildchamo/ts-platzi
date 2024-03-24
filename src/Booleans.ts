(() => {
  let isEnabled = true;

  isEnabled = false;

  let isNew: boolean = false;

  console.log(isNew);

  isNew = true;

  const randomNumber = Math.random();

  console.log(randomNumber);
  isNew = randomNumber >= 0.5 ? true : false;

  console.log(isNew);

  //no usar el mayuscula
  // const myBoolean : Boolean = true
})();
