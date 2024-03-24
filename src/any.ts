(() => {
  let myDinamicVar: any;

  myDinamicVar = 1;
  myDinamicVar = 'hola';

  //quitar el sistema de análisis de tipos! hay otras maneras de generar flexibilidad
  //cuando se debe utilizar? No debe ser utilizado! any es del diablo 👿,
  //typescript es incremental,si agregas ts a un proyecto que antes no lo tenía, puedes usar any!
  //hay librerías que no están bien typadas

  myDinamicVar = 'hola';

  const rta = (myDinamicVar as string).toLocaleLowerCase(); // un casteo :0

  const rta2 = (<number>myDinamicVar).toPrecision(2); // otro tipo de casteo :0, tipos génericos
  //migraciones y adapciones
})();
