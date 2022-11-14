// Композиція та агрегація. Оффтоп.

/**
 * Написати гру, котра буде реалізовуватить за рахунок трьох класів Interface, Game, User
 * Гра "Угадати число". Комп'ютер загадуе число (0-9) та гравцю слід його угадати.
 * Збереження статистики відбуваеться у клас User.
 *
 * Interface, реалізовую собою проміжний клас, котрий має можливість працювати з інтерфейсами. (prompt, alert)
 * Game ініціалізую саму гру, та зберігає результати у клас User
 */

const users = [
  {
    id: 'als34j-as23-a234',
    username: 'johnsmit',
    passoword: '11111111',
    statistic: [],
  },
];

class User {
  //   #id;
  //   #username;
  //   #statistic;
  //   constructor(props) {
  //     this.#id = props.id;
  //     this.#username = props.username;
  //     this.#statistic = props.statistic;
  //   }
  //Метод повинент зберігати статистику.
  //Коли игрова сесія завершуеться, статистика зберігається в глобальний массив.
}

class Game {
  //   #user;
  //   #gameInterface;
  //   constructor(id) {
  //     this.#gameInterface = new GameInterface();
  //     this.#user = this.#gameInterface.login(id);
  //   }
  //   start() {
  //     console.log(this.#user);
  //     //починає ігрову сессію
  //   }
  //генеруе число
  //перевіряє відповідь
  //повертае метод, що реалізує поточний крок
}

class GameInterface {
  //   #users = users;
  //   constructor(ref) {
  //     //покищо ref не використовуэмо
  //   }
  //   login(id) {
  //     console.log('login');
  //     return new User(this.#users.find(user => user.id === id));
  //   }
}

const game = new Game('als34j-as23-a234');
game.start();
