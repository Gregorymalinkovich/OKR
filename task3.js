function getCities(countries) {
  return Object.values(countries).flat().join(', ');
}

const countries = {
  Израиль: ['Тель-Авив', 'Яффо', 'Бней-Брак'],
  Бедарусь: ['Минск', 'Витебск', 'Гродно'],
  Польша: ['Варшва', 'Краков', 'Полька'],
  Амэрыка: ['Калифорния', 'Чикаго','Гаваи']
};

console.log(getCities(countries));