// declaration
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));


// arrow
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));