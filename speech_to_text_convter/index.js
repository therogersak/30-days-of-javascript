let btn = document.getElementById("btn");
let btn2 = document.getElementById("speak");
let text = document.getElementById('text')

btn.addEventListener("click", () => {
  btn.classList.add("fade");

  let recognition = new webkitSpeechRecognition();
  recognition.lang = "hi-in";
  recognition.addEventListener("result", (e) => {
    text.value = e.results[0][0].transcript;
  });
  recognition.start();
});


btn2.addEventListener('click', () => {
    console.log('boo')
    btn2.classList.add('fade_to')
    const  listen = new SpeechSynthesisUtterance();
   listen.text = text.value;
    
    if ('speechSynthesis' in window) {
        // Speech Synthesis supported 🎉
    }else{
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
    }
    listen.lang = 'hi'
    speechSynthesis.speak(listen)
})



