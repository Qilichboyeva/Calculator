let buttons = document.getElementsByClassName("button");
let clear = document.getElementsByClassName("clear");
let equal = document.getElementsByClassName("equal");
let input = document.getElementsByTagName("input")[0];

const showButtonValues = (value) => {
  input.value += value;
};

const handleClear = () => {
  input.value = "";
};

const handleEqual = () => {
  let result = eval(input.value);
  input.value = result;
};

const handleBackSpace = () => {
  input.value = input.value.substring(0, input.value.length - 1);
};
