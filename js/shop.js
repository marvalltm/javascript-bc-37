/**
 * Створити об'ьект. Котрий реалізовую роботу інтернет магазину.
 * Наш магазин повинент мати ключ warehouse (склад), котрый зберігає у собі масив товарів.
 * Кожен товар представляє собою об'єкт, що має такі ключі:
 * id = Math.random, name = "string", category = "string", price = $, qualit = 'hight/low', amount = 1-10,
 * 1. Магазин повинен мати метод, котрий добавляє товари до складу.
 * При цьому якщо товар з таким ім'ям та категорією вже існую, /
 * То замість того щоб добавляти об'єкт торару збільшите кількість (amount) в існуючому обьекті.
 *
 * 2. Створити метод котрый приймає в себе категорію або ім'я товару (я
 * Фільтрує наш масив на складі та повертає нам або список товарів по категорії, або об'єкт конкретного товар.
 *
 * Дотатково (як буде час)
 * 3. Добавити методи, що дозволять змінити ім'я товару, катигорію, якість, ціну.
 * 4. Метод, що видаляю товар зі складу. Повинен враховувати кількість.
 */

const initData = [
  {
    name: 'SmartPhone S20',
    category: 'tech',
    price: 1000,
    qualit: 'hight',
  },
  {
    name: 'SmartPhone S20',
    category: 'tech',
    price: 1000,
    qualit: 'hight',
  },
  {
    name: 'NoteBook K11',
    category: 'tech',
    price: 1500,
    qualit: 'hight',
  },
  {
    name: 'SmartPhone G5',
    category: 'tech',
    price: 700,
    qualit: 'low',
  },
  {
    name: 'SmartPhone G5',
    category: 'tech',
    price: 700,
    qualit: 'low',
  },
  {
    name: 'SmartPhone G5',
    category: 'tech',
    price: 700,
    qualit: 'low',
  },
  {
    name: 'Lamp G1',
    category: 'house',
    price: 10,
    qualit: 'low',
  },
  {
    name: 'Lamp G1',
    category: 'house',
    price: 10,
    qualit: 'low',
  },
  {
    name: 'Lamp G1',
    category: 'house',
    price: 10,
    qualit: 'low',
  },
  {
    name: 'Frame',
    category: 'house',
    price: 2,
    qualit: 'low',
  },
  {
    name: 'Vase Silver C',
    category: 'house',
    price: 71,
    qualit: 'hight',
  },
  {
    name: 'tab S20',
    category: 'electronic',
    price: 1500,
    qualit: 'low',
  },
  {
    name: 'tab S20',
    category: 'electronic',
    price: 1500,
    qualit: 'low',
  },
  {
    name: 'tab S20',
    category: 'electronic',
    price: 1500,
    qualit: 'low',
  },
  {
    name: 'tab S20',
    category: 'electronic',
    price: 1500,
    qualit: 'low',
  },
];
// console.log(initData);
function main() {
  initData.forEach(item => shop.addItemsToWarehouse(item));

  console.log(shop.getItemsFromWarehouse());
  // console.log(shop.filterItemFromWarehouse('tech'));
  // console.log(shop.filterItemFromWarehouse('house'));
  // console.log(shop.filterItemFromWarehouse('NoteBook K11'));
  // console.log(shop.filterItemFromWarehouse('SmartPhone S20'));
  // console.log(shop.filterItemFromWarehouse('Lamp G1'));
  // console.log(shop.filterItemFromWarehouse('NoteBook K3'));

  // shop.changeItemNameFromWarehouse(shop.getRandomItemId(), 'Abrekadabra');
  shop.changeAnyFieldItemFromWarehouse(shop.getRandomItemId(), 'qualit', 'A');
  shop.changeAnyFieldItemFromWarehouse(shop.getRandomItemId(), 'price', 10000);
  console.log(shop.getItemsFromWarehouse());
}
const shop = {
  warehouse: [],
  getItemsFromWarehouse() {
    return this.warehouse;
  },
  getRandomItemId() {
    return this.warehouse[
      Math.floor(Math.random() * (this.warehouse.length - 0) + 0)
    ].id;
  },
  // changeItemNameFromWarehouse(id, name) {
  //   for (const elem of this.warehouse) {
  //     if (elem.id === id) {
  //       elem.name = name;
  //       break;
  //     }
  //   }
  // },
  filterItemFromWarehouse(filter) {
    const filteredArray = [];
    let foundItem = false;
    for (const elem of this.warehouse) {
      if (elem.name === filter) {
        foundItem = elem;
        break;
      }
      if (elem.category === filter) {
        filteredArray.push(elem);
      }
    }

    return foundItem
      ? foundItem
      : filteredArray.length
      ? filteredArray
      : 'Items not found';
  },

  addItemsToWarehouse(item) {
    let foundItemFromWarehouse = false;
    for (const elem of this.warehouse) {
      if (elem.name === item.name) {
        foundItemFromWarehouse = elem;
      }
    }
    if (!foundItemFromWarehouse) {
      const newItem = { ...item };
      newItem.id = Math.floor(Math.random() * 1000 ** 5).toString(36);
      newItem.amount = 1;
      this.warehouse.push(newItem);
    } else {
      foundItemFromWarehouse.amount += 1;
    }
  },

  changeAnyFieldItemFromWarehouse(id, key, value) {
    for (const elem of this.warehouse) {
      if (elem.id === id) {
        elem[key] = value;
        break;
      }
    }
  },
};
main();
