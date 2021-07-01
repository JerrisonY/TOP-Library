const libraryContainer = document.querySelector('.library-container')
const newBookWindow = document.querySelector('.new-book-container')
const newBookBtn = document.querySelector('#addBook')
const closeWindow = document.querySelector('.close-book-form')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
}

let harryPotter = new Book('Harry Potter', 'J.K. Rowling', '542', 'has been read')
console.log(harryPotter.info())


let myLibrary = [
    {name: 'The City of Bone', author: 'Cassandra Clare', pages: 550, read: 'Read'},
];

let addBookToLibrary = () => {
    
}

newBookBtn.addEventListener('click', () => {
    newBookWindow.classList.toggle('display-none')
    libraryContainer.classList.toggle('background-blur')
})

 closeWindow.addEventListener('click', () => {
     newBookWindow.classList.toggle('display-none')
     libraryContainer.classList.toggle('background-blur')
 })