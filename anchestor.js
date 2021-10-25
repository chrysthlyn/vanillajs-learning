const anchestor = [
  {
    name: "Nino",
    child: [
      {
        name: "Hinata",
        child: [
          {
            name: "Ayaka",
          },
          {
            name: "Tohru",
          },
          {
            name: "Himawari",
            child: [
              {
                name: "Tamado",
              },
            ],
          },
          {
            name: "Violet",
          },
        ],
      },
      {
        name: "Miku",
        child: [
          {
            name: "Itsuki",
            child: [
              {
                name: "Fufu",
              },
            ],
          },
          {
            name: "Aoi",
          },
          {
            name: "Sora",
          },
        ],
      },
    ],
  },
];

console.log(anchestor);

function renderAnchestor(node, depth = 0) {
  let inheritance = "",
    space = "";

  for (let i = 0; i < depth; i++) {
    inheritance += "─";
    space += " ";
  }

  node.forEach(function (item) {
    console.log(
      `${depth > 0 ? space + "└" + inheritance + "" : ""}${item.name}`
    );

    if (item.child) renderAnchestor(item.child, (depth += 1));
  });
}

renderAnchestor(anchestor);
