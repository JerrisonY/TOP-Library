const mainContainer = document.querySelector('body');
const libraryContainer = document.querySelector('.library-container')
const libraryHeader = document.querySelector('.library-header')
const cardContainer = document.querySelector('.card-container')
const newBookWindow = document.querySelector('.new-book-container')
const newBookBtn = document.querySelector('#addBook')
const closeWindow = document.querySelector('.close-book-form')
const addBook = document.querySelector('#add-book-btn')
const newBookForm = document.querySelector('.new-book-form')
const lightMode = document.querySelector('#light-mode')


let myLibrary = [
    {name: 'The City of Bone', author: 'Cassandra Clare', pages: 550, read: 'Read', genre: 'Fantasy'},
    {name: 'Harry Potter', author: 'J.K. Rowling', pages: 780, read: 'Read', genre: 'Fantasy'},
    {name: 'The Great Gatsby', author: 'Fitzgerald', pages: 450, read: 'Read', genre: 'Historical Fiction'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Twilight', author: 'Stephanie Meyer', pages: 450, read: 'Not read', genre: 'Fantasy Romance'},
    {name: 'Hercules the Great', author: 'L. Tolstoy', pages: 250, read: 'Read', genre: 'Historical Fiction'},
    {name: 'Lord of the Rings', author: 'J.R. Tolkien', pages: 670, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
    {name: 'Percy Jackson and the Olympians', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'Fantasy'},
];

let generateCards = () => {
    for (let i = 0; i < myLibrary.length; i++) {
        let newCard = document.createElement('div');
        let cardTitle = document.createElement('h3');
        let cardAuthor = document.createElement('p');
        let cardPages = document.createElement('p');
        let cardGenre = document.createElement('p');
        let cardRead = document.createElement('span');
        let cardExit = document.createElement('span');

        newCard.classList.add('new-card')
        cardRead.classList.add('read-container')
        cardExit.classList.add('new-card-exit')
        cardGenre.style.paddingBottom = '40px'

        cardTitle.textContent = `${myLibrary[i].name}`
        cardAuthor.textContent = `By: ${myLibrary[i].author}`
        cardPages.textContent = `Pages: ${myLibrary[i].pages}`
        cardGenre.textContent = `Genre: ${myLibrary[i].genre}`
        cardRead.textContent = `${myLibrary[i].read}`
        cardExit.textContent = 'x'
        cardContainer.appendChild(newCard)
        newCard.append(cardTitle, cardAuthor, cardPages, cardGenre, cardRead, cardExit)
        
        // determines what color the card is depending on read status
        if (cardRead.textContent === 'Read') {
            cardRead.classList.add('read-span')
            newCard.classList.add('read-div')
        } else {
            cardRead.classList.add('not-read-span')
            newCard.classList.add('not-read-div')
        }

        // on click color change for read status
        cardRead.addEventListener('click', () => {
            if (cardRead.textContent === 'Read') {
                cardRead.textContent = 'Not read'
                cardRead.classList.toggle('not-read-span') 
                cardRead.classList.toggle('read-span') 
                newCard.classList.toggle('not-read-div')
                newCard.classList.toggle('read-div')
            } else {
                cardRead.textContent = 'Read'
                cardRead.classList.toggle('not-read-span')
                cardRead.classList.toggle('read-span')
                newCard.classList.toggle('not-read-div')
                newCard.classList.toggle('read-div')
            }
        })

        // deletes card
        cardExit.addEventListener('click', () => {
            newCard.remove()
        })

    }

    lightMode.addEventListener('click', () => {
        if (lightMode.textContent === ' Dark Mode') {
            lightMode.textContent = ' Light Mode'
            mainContainer.classList.remove('lightMode-main-container')
            libraryHeader.classList.remove('myLibrary-lightmode')
        } else {
            lightMode.textContent = ' Dark Mode'
            mainContainer.classList.add('lightMode-main-container')
            libraryHeader.classList.add('myLibrary-lightmode')
            // if (cardRead.textContent === 'Read') {
                cardTitle.classList.add('read-div-lightmode')
            // }
        }
    })
}

let addBookToLibrary = () => {
    const bookTitle = document.querySelector('#book-title');
    const bookAuthor = document.querySelector('#book-author');
    const bookPages = document.querySelector('#number-pages');
    const bookGenre = document.querySelector('#book-genre');
    const bookStatus = document.querySelector('#book-status');
    
    let name = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let genre = bookGenre.value;
    let read = bookStatus.value;

    myLibrary.push({ // pushes the new object into array
        name,
        author,
        pages, 
        genre,
        read,
    })

    cardContainer.textContent = '' // clears the diplayed objects
    generateCards(); // populates card container with existing cards + new ones
    newBookForm.reset() // clears fields - only works because of form element
    newBookWindow.classList.toggle('display-none')
    libraryContainer.classList.toggle('background-blur')
}

addBook.addEventListener('click', () => {
    addBookToLibrary()
})

newBookBtn.addEventListener('click', () => {
    newBookWindow.classList.toggle('display-none')
    libraryContainer.classList.toggle('background-blur')
})

closeWindow.addEventListener('click', () => {
    newBookWindow.classList.toggle('display-none')
    libraryContainer.classList.toggle('background-blur')
})

// stops form from clearing page
newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

generateCards();

// on add book => clear fields, close prompt, clear DOM elements, readd with generate cards