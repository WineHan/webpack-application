import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import {
    addImage
} from "./add-image"
import CreateHeader from "./components/header/header.js"

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

// addImage()

const createHeader = new CreateHeader()
createHeader.render()