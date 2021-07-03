const libraryContainer = document.querySelector('.library-container')
const cardContainer = document.querySelector('.card-container')
const newBookWindow = document.querySelector('.new-book-container')
const newBookBtn = document.querySelector('#addBook')
const closeWindow = document.querySelector('.close-book-form')


let myLibrary = [
    {name: 'The City of Bone', author: 'Cassandra Clare', pages: 550, read: 'Read', genre: 'fantasy'},
    {name: 'Harry Potter', author: 'J.K. Rowling', pages: 780, read: 'Read', genre: 'fantasy'},
    {name: 'Gatsby', author: 'Fitzgerald', pages: 450, read: 'Read', genre: 'fantasy'},
    {name: 'Percy Jackson', author: 'Coleman S.', pages: 250, read: 'Not read', genre: 'fantasy'},
];

let generateCards = () => {
    for (let i = 0; i < myLibrary.length; i++) {
        let newCard = document.createElement('div');
        let cardTitle = document.createElement('h3');
        let cardAuthor = document.createElement('p');
        let cardPages = document.createElement('p');
        let cardGenre = document.createElement('p');
        let cardRead = document.createElement('p');
        let cardExit = document.createElement('span')

        newCard.classList.add('new-card')
        cardTitle.textContent = `${myLibrary[i].name}`
        cardAuthor.textContent = `By: ${myLibrary[i].author}`
        cardPages.textContent = `Pages: ${myLibrary[i].pages}`
        cardGenre.textContent = `Genre: ${myLibrary[i].genre}`
        cardRead.textContent = `${myLibrary[i].read}`
        cardExit.textContent = 'x'
        cardContainer.appendChild(newCard)
        newCard.append(cardTitle, cardAuthor, cardPages, cardGenre, cardRead, cardExit)
        
        // determines what color the card is depending on read status
        cardRead.textContent === 'Read'
            ? newCard.style.backgroundColor = '#DAF7A6'
            : newCard.style.backgroundColor = '#FFC300'

        cardRead.style.cursor = 'pointer'
        
        // on click color change for read status
        cardRead.addEventListener('click', () => {
            if (cardRead.textContent === 'Read') {
                cardRead.textContent = 'Not read'
                newCard.style.backgroundColor = '#FFC300'
            } else {
                cardRead.textContent = 'Read'
                newCard.style.backgroundColor = '#DAF7A6'
            }
        })

        // deletes card
        cardExit.addEventListener('click', () => {
            newCard.remove()
        })
    }
}

generateCards();

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

 // create more objects, find way to display array as cards (function)