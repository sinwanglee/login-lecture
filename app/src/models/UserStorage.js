"use strict";

class UserStorage {
  static #users = {
    id: ["abcd", "efgh", "ight"],
    password: ["1234", "1234", "1234"],
    name: ["lsw", "bcd", "abcde"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      console.log(__filename, "field", newUsers, field);
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }

      return newUsers;
    }, {});

    console.log(newUsers);
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);

    console.log(users);
  }
}

module.exports = UserStorage;
