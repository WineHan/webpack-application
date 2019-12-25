import head from "./head.jpeg";

export function addImage() {
    const img = document.createElement('img');
    img.alt = "head";
    img.width = 300;
    img.src = head;

    const body = document.querySelector('body');
    body.appendChild(img);
}