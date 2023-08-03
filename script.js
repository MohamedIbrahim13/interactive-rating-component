const main = document.querySelector("main");
const form = document.querySelector("form");
const rating = document.querySelectorAll(".rating");
const button = document.querySelector("button");

function onHover(ele, over, leave) {
  ele.addEventListener("mouseenter", over);
  ele.addEventListener("mouseleave", leave);
}

rating.forEach(item => {
  //   item.addEventListener("mouseover", e => {
  //     console.log(e.target.value);
  //   });
  onHover(
    item,
    () => {
      item.style.backgroundColor = "hsl(25, 97%, 53%)";
      item.style.color = "white";
    },
    () => {
      item.style.backgroundColor = "hsl(213, 19%, 18%)";
      item.style.color = "hsl(216, 12%, 54%)";
    }
  );
});

onHover(
  button,
  () => {
    button.style.backgroundColor = "white";
    button.style.color = "hsl(25, 97%, 53%)";
  },
  () => {
    button.style.backgroundColor = "hsl(25, 97%, 53%)";
    button.style.color = "white";
  }
);

let clicked = false;
let score;
rating.forEach(item => {
  item.addEventListener("click", e => {
    clicked = true;
    if (clicked) {
      score = e.target.value;
    }
  });
  form.addEventListener("submit", e => {
    e.preventDefault();

    main.innerHTML = "";
    main.innerHTML += `<div class="text-center">
    <div class="flex justify-center items-center"><img src="./images/illustration-thank-you.svg" alt="Thank You"></div>
  
      <div class="bg-[color:var(--darkBlue)] my-7 w-[60%] mx-[auto] text-[color:var(--orange)] md:p-2 p-1 rounded-full text-xs align-middle md:text-sm">You selected ${score} out of 5</div>
  
      <h1 class="my-1">Thank you!</h1>
  
      <p>We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>`;
  });
});
