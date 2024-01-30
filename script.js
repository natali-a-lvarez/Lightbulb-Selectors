// Write your code here
let lightbulbs = document.querySelectorAll(".item");
let subtitle = document.querySelector(".subtitle");
let count = 0;

console.log(lightbulbs);

lightbulbs.forEach((el) => {
  console.log(el);

  el.addEventListener("click", function () {
    count++;
    el.classList.toggle("active");
    subtitle.innerHTML = `You've clicked the lights ${count} ${
      count > 1 ? "times" : "time"
    }`;
  });
});
