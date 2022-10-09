const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#d6b3ff",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ice: "#e0f5ff ",
};

const bgColors = {
  water: "primary",
  grass: "success",
  fire: "danger",
  normal: "secondary",
  bug: "warning",
  electric: "secondary",
  ground: "warning",
  rock: "danger",
  fairy: "success",
  poison: "primary",
  dragon: "primary",
  psychic: "danger",
  flying: "warning",
  fighting: "primary",
  ice: "warning ",
  ghost: "secondary",
  dark: "black",
};

const rangeInput1 = document.querySelector(".rangeInput1");
const rangeInput2 = document.querySelector(".rangeInput2");
const rangeArea1 = document.querySelector(".rangeArea1");
const rangeArea2 = document.querySelector(".rangeArea2");

rangeInput1.addEventListener("input", (e) => {
  if (Number(rangeInput1.value) > Number(rangeInput2.value)) {
    rangeInput1.value == rangeInput2.value;
  }

  rangeArea1.innerHTML = e.target.value;
});

rangeInput2.addEventListener("input", (e) => {
  if (Number(rangeInput2.value) < Number(rangeInput1.value)) {
    rangeInput2.value == rangeInput1.value;
  }

  rangeArea2.innerHTML = e.target.value;
});

const searchByKgButton = document.querySelector(".searchKgBtn");

searchByKgButton.addEventListener("click", () => {
  const kgs = document.querySelectorAll(".kg");
  let counter = 0;
  kgs.forEach((item) => {
    item.closest(".card").style.display = "none";
    const result =
      Number(item.innerText) < Number(rangeInput2.value) &&
      Number(item.innerText) > Number(rangeInput1.value);
      
  });
});
