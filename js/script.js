const addBook = document.querySelector('#addBook')

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
 console.log(1+1)

 addBook.addEventListener('click', () => {
    prompt('Name of book')
 })
 
