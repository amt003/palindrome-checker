const txtInput = document.querySelector(".inputs input"),
  checkBtn = document.querySelector(".inputs button"),
  infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
  //spliting user input charecter,reversing them
  //and joining them in a single word
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";

  if (filterInput != reverseInput) {
    return (infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`);
  }
  infoTxt.innerHTML = `Yes,<span>'${txtInput.value}' </span> is a palindrome!`;
});
txtInput.addEventListener("keyup", () => {
  //removing spaces and special charecters from entered value
  filterInput = txtInput.value.toLowerCase().replace(/[^A-z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoTxt.style.display = "none";
  checkBtn.classList.remove("active");
});
