"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
  console.log(id.value);
  const req = {
    id: id.value,
    password: password.value,
  };

  console.log(req);
}
