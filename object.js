// const Person = {
//   firstName: "Nino",
//   lastName: "Nakano",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   weight: 55,
//   height: 155,
//   isWeightIdeal: function () {
//     const heightMinus100 = this.height - 100;
//     return heightMinus100 - (heightMinus100 * 15) / 100 < this.weight;
//   },
// };

// console.log(Person.fullName());
// console.log(Person.isWeightIdeal());

const countries = {
  ID: {
    province: ["dki jakarta", "jawa barat", "bali"],
    city: ["jakarta timur", "jakarta barat", "jakarta pusat"],
  },
  MY: {},
};

console.log(countries.MY.province ?? "Not Found");
