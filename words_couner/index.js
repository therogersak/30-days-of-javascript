var text = document.getElementById("text");
var words = document.getElementById("words");
var chars = document.getElementById("chars");

text.addEventListener("input", () => {
  var txt = text.value.trim().split(" ");
  words.innerText = txt.length;

  var txtChar = text.value.trim();
  chars.innerText = txtChar.length;
});
