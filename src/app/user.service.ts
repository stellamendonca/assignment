// export class UserService {
//   loggedIn = false;
// constructor() {
//   console.log('in service constructor');
//   this.loggedIn = false;
// }
//   isAuthenticated() {
//     const promise = new Promise(
//       (resolve, reject) => {
//         setTimeout(() => {
//           resolve(this.loggedIn);
//         }, 800);
//       }
//     );
//     return promise;
//   }

//   login() {
//     this.loggedIn = true;
//   }

//   logout() {
//     this.loggedIn = false;
//   }

// }


export class UserService {
public loggedIn = JSON.parse(localStorage.getItem('login')) || false;

public isAuthenticated() {
const promise = new Promise(
(resolve, reject) => {
setTimeout(() => {
resolve(this.loggedIn);
}, 800);
}
);
return promise;
}

public login() {
localStorage.setItem('login', JSON.stringify(true));
this.loggedIn = true;
}

public logout() {
// localStorage.setItem('login',JSON.stringify(false));
localStorage.removeItem('login');
localStorage.removeItem('username');
this.loggedIn = false;
}
}
