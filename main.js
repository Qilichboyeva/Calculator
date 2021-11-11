let buttons = document.getElementsByClassName("button");
let equal = document.getElementsByClassName("equal");
let input = document.getElementsByTagName("input")[0];
let bs = document.getElementById("bs");
let clear = document.getElementById("clear");

const showButtonValues = (value) => {
  input.value += value;
};

const handleClear = () => {
  input.value = "";

  bs.style.display = "block";
  clear.style.display = "none";
};

const handleEqual = () => {
  let { value } = input;

  if (value.includes("%")) {
    value = value.replace("%", " /100 * ");
  }

  let result = eval(value);
  input.value = result;

  bs.style.display = "none";
  clear.style.display = "block";
};

const handleBackSpace = () => {
  input.value = input.value.substring(0, input.value.length - 1);
};
