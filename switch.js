// const fruit = "pepaya";
// let namaBuah = "";

// switch (fruit) {
//   case "pepaya":
//     namaBuah = "Ini buah pepaya";
//     break;

//   case "apel":
//     namaBuah = "Ini buah apel";
//     break;

//   default:
//     namaBuah = "Tidak ada buah";
//     break;
// }

// console.log(namaBuah);

const nomor = 1;

function pilihBuah(nomor) {
  switch (nomor) {
    case 1:
      return "Apel";
    case 2:
      return "Melon";
    case 3:
      return "Semangka";
    case 4:
      return "Pepaya";
    case 5:
      return "Jambu";

    default:
      return "Tidak ada buah";
  }
}

console.log(pilihBuah(3));
