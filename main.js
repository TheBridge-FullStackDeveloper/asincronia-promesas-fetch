function pelarPatatas() {
  console.log("Pelar y cortar las patatas");
}

function freirPatatas() {
  console.log(
    "Introducimos las patatas cortadas en la sartén y que se cocinen"
  );
  setTimeout(() => {
    console.log("Patatas friendose");
  }, 10000);
}

function batirHuevos() {
  console.log("batimos los huevos");
}
function escurrirPatatas() {
  console.log("Quitamos con una espumadera las patatas de la sartén");
}
function mezclarIngredientes() {
  console.log(
    "Introducimos las patatas escurridas al bol con la cebolla y el huevo."
  );
}
function hacerUnaTortilla() {
  pelarPatatas();
  freirPatatas();
  batirHuevos();
  escurrirPatatas();
  mezclarIngredientes();
}

// hacerUnaTortilla();

// let miPromesa = new Promise((resolve, reject) => {
//     console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
//     setTimeout(() => {
//       resolve("Hola");
//     }, 3000);
//   });

// let miPromesa = new Promise((resolve, reject) => {
//   //me dará un numero aleatorio
//   let number = Math.floor(Math.random() * (100 - 0 + 1) + 0);
//   console.log("te prometo que " + number + " es menor igual que 50");
//   if (number <= 50) {
//     resolve(number + " es menor igual a 50");
//   } else {
//     reject("mentira");
//   }
// });

// miPromesa.then((res) => console.log(res))
//          .catch((err) => console.error(err));

let friendoPatatas = new Promise((resolve) => {
  console.log("Aquí friendo las patatas");
  setTimeout(() => {
    resolve("Patatas freídas");
  }, 10000);
});

// friendoPatatas.then((patataFreida) => {
//   console.log(patataFreida, "Ya podemos mezclar las patatas con los huevos batidos!");
//   mezclarIngredientes();
// });



fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));