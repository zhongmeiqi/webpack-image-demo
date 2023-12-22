import Icon from "./icon.png?as=webp";
import banner_red from "./banner_red.jpg?as=webp";
import banner_blue from "./banner_blue.jpeg?as=webp";
import "./style.css";

console.log(banner_red, banner_blue);

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = "Hello, webpack";
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  const banner1 = new Image();
  banner1.src = banner_red;

  element.appendChild(banner1);

  const banner2 = new Image();
  banner2.src = banner_blue;

  element.appendChild(banner2);

  return element;
}

document.body.appendChild(component());

