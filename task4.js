const items = [
  { category: 'Техника', value: 10 },
  { category: 'Еда', value: 15 },
  { category: 'Техника', value: 20 },
  { category: 'ПП', value: 5 },
  { category: 'Еда', value: 25 }
];

const result = {};

for (const item of items) {
  if (result[item.category]) {
    result[item.category] += item.value;
  } else {
    result[item.category] = item.value;
  }
}
console.log(result);

