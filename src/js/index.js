import axios from 'axios';
const root = document.querySelector('.list__methods');
const BASE_URL = 'http://localhost:3000';
let someID;

// const getAllUsers = function () {
//   return fetch(`${BASE_URL}/users`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('NOT OK');
//       }
//       return response.json();
//     })
//     .then(({ data }) => {
//       console.log('ALL USERS: ', data);
//       someID = data[2].id;
//     });
// };

// const getOneUser = function () {
//   if (someID) {
//     return fetch(`${BASE_URL}/user/${someID}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('NOT OK');
//         }
//         return response.json();
//       })
//       .then(({ data }) => console.log('one USER: ', data));
//   } else {
//     throw new Error('not set ID');
//   }
// };

// const addUser = function () {
//   return fetch(`${BASE_URL}/user`, {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ login: 'wwwww@admin.com', rules: 'www' }),
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('NOT OK');
//       }
//       return response.json();
//     })
//     .then(({ data, status }) =>
//       console.log('status: ', status, 'data: ', data)
//     );
// };

// const updateUser = function () {
//   if (someID) {
//     return fetch(`${BASE_URL}/user/${someID}`, {
//       method: 'PUT', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ login: 'wdddwwww@admin.com', rules: 'ddd' }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('NOT OK');
//         }
//         return response.json();
//       })
//       .then(({ data, status }) =>
//         console.log('status: ', status, 'data: ', data)
//       );
//   } else {
//     throw new Error('not set ID');
//   }
// };

// const patchUser = function () {
//   if (someID) {
//     return fetch(`${BASE_URL}/user/${someID}`, {
//       method: 'PATCH', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ login: '11111www@admin.com', rules: '111' }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('NOT OK');
//         }
//         return response.json();
//       })
//       .then(({ data, status }) =>
//         console.log('status: ', status, 'data: ', data)
//       );
//   } else {
//     throw new Error('not set ID');
//   }
// };

// const deleteUser = function () {
//   return fetch(`${BASE_URL}/user/${someID}`, {
//     method: 'DELETE',
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('NOT OK');
//       }
//       return response.json();
//     })
//     .then(({ data, status }) =>
//       console.log('status: ', status, 'data: ', data)
//     )
// };

// axios(`${BASE_URL}/users`).then(({ data }) => console.log(data));

// axios({
//   method: 'GET',
//   url: `${BASE_URL}/users`,
// }).then(({ data }) => console.log(data));

// axios.get(`${BASE_URL}/users`).then(({ data }) => console.log(data));

const userAPI = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

const getAllUsers = function () {
  return userAPI(`/users`).then(({ data }) => {
    someID = data.data[2].id;
    console.log(data.data);
  });
};

const getOneUser = function () {
  if (someID) {
    return userAPI(`/user/${someID}`).then(({ data }) =>
      console.log(data.data)
    );
  } else {
    throw new Error('not set ID');
  }
};

const addUser = function () {
  return userAPI
    .post(`/user`, {
      login: 'wwwww@admin.com',
      rules: 'www',
    })
    .then(({ data }) => console.log(data));
};

const updateUser = function () {
  if (someID) {
    return userAPI
      .put(`/user/${someID}`, {
        login: 'wwwww@admin.com',
        rules: 'www',
      })
      .then(({ data }) => console.log(data));
  } else {
    throw new Error('not set ID');
  }
};

const patchUser = function () {
  if (someID) {
    return userAPI
      .patch(`/user/${someID}`, {
        login: 'wwssswww@admin.com',
        rules: 'wsssww',
      })
      .then(({ data }) => console.log(data));
  } else {
    throw new Error('not set ID');
  }
};

const deleteUser = function () {
  if (someID) {
    return userAPI
      .delete(`/user/${someID}`)
      .then(({ data }) => console.log(data));
  } else {
    throw new Error('not set ID');
  }
};

const handleClick = function (e) {
  const className = e.target.classList[1];
  switch (className) {
    case 'get__all': {
      getAllUsers().catch(error => console.log(error));
      break;
    }
    case 'get': {
      getOneUser().catch(error => console.log(error));
      break;
    }
    case 'post': {
      addUser().catch(error => console.log(error));
      break;
    }
    case 'put': {
      updateUser().catch(error => console.log(error));
      break;
    }
    case 'patch': {
      patchUser().catch(error => console.log(error));
      break;
    }
    case 'delete': {
      deleteUser().catch(error => console.log(error));
      break;
    }
  }
};

// ========================= LISTENER ================================
root.addEventListener('click', handleClick);
