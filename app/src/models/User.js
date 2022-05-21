"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const { id, password } = await UserStorage.getUserInfo(this.body.id);
    console.log(id, password);
    const res = {};
    if (id) {
      if (id === this.body.id && password === this.body.password) {
        res.success = true;
      } else {
        res.success = false;
        res.msg = "비번이 틀렸습니다.";
      }
    } else {
      res.success = false;
      res.msg = "존재하지 않는 id 입니다.";
    }
    return res;
  }

  register() {
    UserStorage.save(this.body);
  }
}

module.exports = User;
