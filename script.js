// HTML element
//const heading = document.querySelector('');
const typingSpeed = 25;
const expand = $(".expand")

let heading = $("#page-1 h1.normal")

const dialogues = [
"I made this website specifically for ya :)",
"But i still dont know what to put in here :(",
"so for now im gonna show you this with no context at all",
  ]

let currentDialogue = 0
let onDialogue = false

const ad1_pg1 = $("#page-1 .expand")

ad1_pg1.on("click", () => {
  if (!onDialogue)
  {
    onDialogue = true
    console.log("You pressed but without dialogu")
    if (currentDialogue < dialogues.length) {
      clearText(dialogues[currentDialogue], "#page-1 h1.normal")
      currentDialogue++;
    } else {

      // TODO: First dialogues were done
      expand.css({"animation": "0.5s slideOut ease-in-out"})
      expand.on("animationend", () => { expand.remove() })
      $(heading).css({"animation": "0.5s slideOut ease-in-out"})
      $(heading).on("animationend", () => { $(heading).remove() })

      $("#page-1").css({"animation": "1s changeBg ease-in-out"})
      $("#page-1").css({"background-color": "#B3C890"})

      $("#page-1").append(`
            <img src="https://media.tenor.com/arqlNu8gyJYAAAAM/cat-cat-jumping.gif" alt="">
        `)
      $("#hide-first img").css({"animation": "1s slideIn"})

    } 
  } else {
    console.log("You pressed but dialogue is still here bitch")
  }
})

function clearText(t,q) {
  const heading = $(q);
  //expand.style.animation = "1s slideOut ease-in-out";

  let i = heading.text().length;
  const timer = setInterval(() => {
    console.log(onDialogue)
    heading.text(heading.text().slice(0, -1));
    i--;

    if (i === 0) {
      clearInterval(timer);
      typeEffect(t, heading);

    }
  }, typingSpeed);



}

function typeEffect(textToType, heading) {
  let i = 0;
  const timer = setInterval(() => {
    heading.text(heading.text() + textToType[i]);
    i++;

    if (i === textToType.length) {
      clearInterval(timer);
      onDialogue = false
      console.log("Its doone")
    }
  }, typingSpeed);
}