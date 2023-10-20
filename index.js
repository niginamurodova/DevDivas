const stafCard1 = document.querySelectorAll(".staff_card-1");
const stafCard2 = document.querySelectorAll(".staff_card-2");

stafCard1.forEach((card) => {
  setInterval(() => {
    card.classList.toggle("staff_card-1--none");
  }, 2000);
});

stafCard2.forEach((card) => {
  setInterval(() => {
    card.classList.toggle("staff_card-2--block");
  }, 2000);
});
