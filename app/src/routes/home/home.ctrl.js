"use strict";

const users = {
  id: ["abcd", "efgh", "ight"],
  password: ["1234", "1234", "1234"],
};

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({ success: true });
      }
    }

    return res.json({
      success: false,
      msg: "fail login",
    });
  },
};

module.exports = {
  output,
  process,
};
