"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const btn = document.querySelector("#button");

btn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  console.log(req);
  console.log(JSON.stringify(req));

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) location.href = "/login";
      else alert(res.msg);
    })
    .catch((err) => {
      console.error("회원가입 중 오류 발생");
    });
}
