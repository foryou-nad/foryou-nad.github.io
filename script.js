// HTML element
//const heading = document.querySelector('');
const typingSpeed = 100;
const expand = $(".expand")

const ad1_pg1 = $("#page-1 .expand")

ad1_pg1.on("click", () => {
  clearText("I made this website specifically for you", "#page-1 h1.normal")
})

function clearText(t,q) {
  const heading = $(q);
  //expand.style.animation = "1s slideOut ease-in-out";
  expand.css({"animation": "1s slideOut ease-in-out"})
  expand.on("animationend", () => {
    expand.remove()
  })
  let i = heading.text().length;
  const timer = setInterval(() => {
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
    }
  }, typingSpeed);
}