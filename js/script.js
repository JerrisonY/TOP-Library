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

<<<<<<< HEAD
let myLibrary = [1,2,3];

let addBookToLibrary = (input) => {

}

let displayLibrary = () => {
    return myLibrary.forEach()
}

console.log(displayLibrary())
=======

let myLibrary = [];

let addBookToLibrary = (book) => {
    
}

>>>>>>> adfa94ed62dce1462f6c4eb9a65a8dcadad5016e
