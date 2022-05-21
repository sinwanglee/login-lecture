"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const btn = document.querySelector("#button");

btn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    password: password.value,
  };

  //   console.log(req);
  //   console.log(JSON.stringify(req));

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) location.href = "/";
      else alert(res.msg);
    })
    .catch((err) => {
      console.error("로그인중 오류 발생");
    });
}
