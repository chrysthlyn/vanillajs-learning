const Person = {
  firstName: "Nino",
  lastName: "Nakano",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 55,
  height: 165,
  weightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 15) / 100;
  },
  needDiet: function () {
    const weightIdeal = this.weightIdeal();
    if (weightIdeal - 5 > this.weight)
      return (
        "you need more protein, need more " + (weightIdeal - this.weight) + "kg"
      );
    else if (weightIdeal + 5 < this.weight)
      return "you need diet " + (this.weight - weightIdeal) + "kg";
    return "you are in a good shape";
  },
};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());
