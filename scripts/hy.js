

let username;
document.getElementById("button").onclick = function () {
  username = document.getElementById("spaces").value
  console.log(`Welcome ${username}`);
};