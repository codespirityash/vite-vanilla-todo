
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const text = document.createElement("div");
  text.innerText = "HELLO";
  document.body.append(text);
});