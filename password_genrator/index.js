function createPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHJKLIMNOPQRSTVWXYZ";
  let password = "";
  var passwordLenght = 12;

  for (let i = 0; i < passwordLenght; i++) {
    var randomNumbers = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumbers, randomNumbers + 1);
  }

  document.getElementById("password").value = password;
}

function copyClipbord() {
  var password = document.getElementById("password").value;
  navigator.clipboard.writeText(password).then((sus) => {
    alert("Copied");
  });
}
