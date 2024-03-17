import { func1 } from "./info.js";
import { func2 } from "./image.js";

const wrapper = document.querySelector(".wrapper");

const data = {
    title: "Loki the God of Stories",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn: "click here",
    img: "vr.png",

    title2: "PROJECT COMPLETED",
    img1: "vr4.jpg",
    img2: "vr3.jpg",
    img3: "vr2.jpg",
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn1: "click here",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn2: "click here",
    para3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    btn3: "click here",
};

const { title, para, btn, img, title2, img1, img2, img3, para1, btn1, para2, btn2, para3, btn3 } = data;

const classL = func1(title, para, btn);
const classR = func2(img);

wrapper.append(classL, classR);

const container = document.querySelector(".container");

const imageClass1 = func2(img1);
const imageClass2 = func2(img2);
const imageClass3 = func2(img3);

const p1 = document.createElement("p");
p1.textContent = para1;
const btn1Element = document.createElement("button");
btn1Element.textContent = btn1;
imageClass1.append(p1, btn1Element);

const p2 = document.createElement("p");
p2.textContent = para2;
const btn2Element = document.createElement("button");
btn2Element.textContent = btn2;
imageClass2.append(p2, btn2Element);

const p3 = document.createElement("p");
p3.textContent = para3;
const btn3Element = document.createElement("button");
btn3Element.textContent = btn3;
imageClass3.append(p3, btn3Element);

container.append(imageClass1, imageClass2, imageClass3);
