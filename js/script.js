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


let myLibrary = [];

let addBookToLibrary = (book) => {
    
}

