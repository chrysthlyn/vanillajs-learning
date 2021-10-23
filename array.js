const namaKeluarga = ["ichika", "nino", "miku"];

// console.log([namaKeluarga]); -> Array Item
// console.log(namaKeluarga[0]); -> Access an Array item using the index position
// console.log(namaKeluarga.length); -> Create an Array

namaKeluarga.forEach(function (item, index, array) {
  console.log(item, index);
});

// namaKeluarga.push("yotsuba"); -> Add an item to the end of an Array
// console.log(namaKeluarga);

// namaKeluarga.pop(); -> Remove an item from the end of an Array
// console.log(namaKeluarga);

// namaKeluarga.shift(); -> Remove an item from the beginning of an Array
// console.log(namaKeluarga);

// console.log("Dia adalah anak ke", namaKeluarga.indexOf("nino") + 1); -> Find the index of an item in the Array

// namaKeluarga.splice(namaKeluarga.indexOf("nino"), 1);

// const namaKeluargaLama = namaKeluarga; -> Deep Copy

const namaKeluargaLama = namaKeluarga.slice();

namaKeluarga.splice(namaKeluarga.indexOf("nino"), 1);

console.log("Nama keluarga: ", namaKeluarga);

console.log("Nama keluarga lama: ", namaKeluargaLama);
