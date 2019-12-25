import "./hello-world-button.scss";

class HelloWorldButton {
  helloWorldButton = "hello-world-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello world";
    button.classList.add(this.helloWorldButton);
    const body = document.querySelector("body");
    button.onclick = function() {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}

export default HelloWorldButton;
