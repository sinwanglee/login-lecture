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
}

module.exports = UserStorage;
