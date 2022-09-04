const drop = document.querySelector(".drop");
const input = document.querySelector(".drop input");
const text = document.querySelector(".text");
const progress = document.querySelector(".progress");
const img = document.getElementById("img");

let files =[]

// for browse files
input.addEventListener("change", (e) => {
  drop.style.display = "none";
  files.push(e.target.files[0]);
  uplode();
});

// for dragover
drop.addEventListener("dragover", (e) => {
  e.preventDefault();
  (text.innerHTML = "Release Your Mouse To Uplode"),
    drop.classList.add("drop-active");
});

// for darg leave
drop.addEventListener("dragleave", (e) => {
  e.preventDefault();
  text.innerHTML =
    "Darg your document, photos, or videos here to start uploding";
  drop.classList.remove("drop-active");
});

// for drop
drop.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.files)
  files = e.dataTransfer.files;
  drop.style.display = "none";
  uplode();
});



// uploding logic
function uplode() {
  progress.style.display = "block";
  img.style.display = "block";
  console.log(files)
  progress.innerHTML = "Your File Uplode Success";
  img.src = URL.createObjectURL(files[0] || files[0][0])
}


/// Follow therogersak for more such good content

