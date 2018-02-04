
const FAMILY = {
  AMANITACEAE: 'Amanitaceae',
  BOLETACEAE: 'Boletaceae',
  TRICHOLOMATACEAE: 'Tricholomataceae',
  RUSSULACEAE: 'Russsulaceae'
};

const EDIBILITY = {
  EXCELLENT: 'Ecellent',
  GOOD: 'Good',
  TOXIC: 'Toxic',
  MORTAL: 'Mortal'
};

export const Mushrooms = [
  { name: "Amanita Caesarea", family: FAMILY.AMANITACEAE, edibility: EDIBILITY.EXCELLENT, caught: 0},
  { name: "Amanita Phalloides", family: FAMILY.AMANITACEAE, edibility: EDIBILITY.MORTAL, caught: 0},
  { name: "Russula Virescens", family: FAMILY.RUSSULACEAE, edibility: EDIBILITY.GOOD, caught: 0},
  { name: "Boletus Edulis", family: FAMILY.BOLETACEAE, edibility: EDIBILITY.EXCELLENT, caught: 0},
  { name: "Boletus Regius", family: FAMILY.BOLETACEAE, edibility: EDIBILITY.GOOD, caught: 0},
  { name: "Boletus Satanas", family: FAMILY.BOLETACEAE, edibility: EDIBILITY.TOXIC, caught: 0},
  { name: "Lepista Nuda", family: FAMILY.TRICHOLOMATACEAE, edibility: EDIBILITY.GOOD, caught: 0},
  { name: "Tricholoma Equestre", family: FAMILY.TRICHOLOMATACEAE, edibility: EDIBILITY.MORTAL, caught: 0},
  { name: "Tricholoma Columbetta", family: FAMILY.TRICHOLOMATACEAE, edibility: EDIBILITY.GOOD, caught: 0},
  { name: "Amanita Verna", family: FAMILY.AMANITACEAE, edibility: EDIBILITY.MORTAL, caught: 0}
];
