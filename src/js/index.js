/**
 * Async Await
 */

// const someFunction = async function () {
//   const response = await fetch(`http://localhost:3000/user/all`);
//   return await response.json();
// };

// const someFunction = async function () {
//   const response = await fetch(`http://localhost:3000/user/all`);
//   // код внизу виконаэться тільки після того як буде віконано проміс вище.
//   console.log('response: ', response);
//   const json = await response.json();
//   // код внизу виконаэться тільки після того як буде віконано проміс вище.
//   console.log('json: ', json);
//   return json;
// };

// someFunction()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// import axios from 'axios';
// const root = document.querySelector('.list__methods');
// const BASE_URL = 'http://localhost:3000';
// let someID;

// const getAllUsers = async function () {
//   try {
//     const response = await fetch(`${BASE_URL}/user/all`);

//     if (!response.ok) {
//       throw new Error('NOT OK');
//     }

//     const { data } = await response.json();

//     return data.length && data[2].id;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const userAPI = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: { 'Content-Type': 'application/json' },
// });

// const getAllUsers = async function () {
//   try {
//     const {
//       data: { data },
//     } = await userAPI(`/user/all`);

//     return data.length && data[2].id;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const handleClick = async function (e) {
//   const className = e.target.classList[1];
//   switch (className) {
//     case 'get__all': {
//       someID = await getAllUsers();
//       console.log('ID: ', someID);
//       break;
//     }
//   }
// };

// // ========================= LISTENER ================================
// root.addEventListener('click', handleClick);

/*
 * ========================= ====== ====================================
 * ========================= REDUCE ====================================
 * ========================= ====== ====================================
 */
// import axios from 'axios';
// const products = [345123456, 335122256, 335123356, 345444456];
// const url = `http://localhost:3000/product/`;

// // const promiseList = products.map(item => {
// //   return new Promise((resolve, reject) => {
// //     resolve(axios(url + item));
// //   });
// // });
// // Promise.all(promiseList).then(data => console.log(data));

// const newProduct = products.reduce(async (acc, item) => {
//   const response = await fetch(url + item);
//   const json = await response.json();
//   return [...acc, item];
//   // await Promise.resolve();
// }, []);
// console.log(newProduct);

/*
 * ========================= ===== ====================================
 * ========================= TASKS ====================================
 * ========================= ===== ====================================
 */
import axios from 'axios';
const BASE_URL = 'http://localhost:3000';
const root = document.querySelector('.list__methods');
const form = document.querySelector('.login');
let token;

const getInfo = async function (url, name) {
  try {
    const data = await axios({
      url, //url: url
      headers: {
        authorization: token,
      },
    });
    console.log(`${name}: `, data);
  } catch (err) {
    console.log(err.message);
  }
};

const handleClick = async function (e) {
  const className = e.target.classList[1];
  await getInfo(`${BASE_URL}/${className}/all`, className);
};

const login = async function (requestData) {
  try {
    return await axios.post(`${BASE_URL}/auth/signin`, requestData);
  } catch (err) {
    console.log(err.message);
  }
};

const handleSubmit = async function (e) {
  try {
    e.preventDefault();
    const response = await login({
      login: e.target.elements['login'].value,
      password: e.target.elements['password'].value,
    });
    if (response) {
      token = response.data.data;
    }
  } catch (err) {
    console.log(err.message);
  }
};

// // ========================= LISTENER ================================
root.addEventListener('click', handleClick);
form.addEventListener('submit', handleSubmit);
