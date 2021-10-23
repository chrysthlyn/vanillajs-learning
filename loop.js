const namaKeluarga = ["ichika", "nino", "miku"];

console.log(namaKeluarga);

// Looping with For
// for (let index = 0; index < namaKeluarga.length; index++) {
//   const element = namaKeluarga[index];
//   console.log(element);
// }

// Looping with While
// let index = 0;
// while (index < namaKeluarga.length) {
//   const element = namaKeluarga[index];
//   console.log(element);
//   index++;
// }

console.log(
  namaKeluarga
    .filter(function (item) {
      return item == "ichika";
    })
    .map(function (item, index) {
      return `${item} adalah anak ke ${index + 1}`;
    })
    .join(", ")
);
