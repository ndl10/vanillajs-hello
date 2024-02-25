/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });

  console.log("Hello Rigo from the console!");
};

let excuseGenerator = () => {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "The president",
    "Your girlfriend",
    "Your boyfriend",
    "The police",
    "The aliens",
    "A casuel spirit who came to me",
    "Elon Musk",
    "Batman",
    "The boss"
  ];
  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "burned",
    "sold",
    "rent",
    "put into the water",
    "mixed with acid",
    "put it next to the window"
  ];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "the wedding dress",
    "the aliance",
    "the contract",
    "your favourite book",
    "the tortilla de patata",
    "the credit card",
    "the passboard"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "during my shift",
    "while I was coding",
    "while I was cutting my nails",
    "before I could stop my moto when I saw it",
    "and I don't give a Fuck!",
    "when my crush was passing in front of us"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    " "
  );
};
