import header from './header.scss'

class CreateHeader {
    render() {
        const h1 = document.createElement('h1')
        const body = document.querySelector('body')
        h1.innerHTML = 'Hello World'
        body.appendChild(h1)
    }
}
export default CreateHeader