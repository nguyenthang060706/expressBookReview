const axios = require('axios');

// Task 10: Get all books - async/await
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:5000/');
    console.log("All Books:", response.data);
  } catch (error) {
    console.error(error);
  }
}

// Task 11: Get book details by ISBN - Promise callbacks
function getBookByISBN(isbn) {
  axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
      console.log(`Book with ISBN ${isbn}:`, response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

// Task 12: Get book details by Author - async/await
async function getBookByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    console.log(`Books by ${author}:`, response.data);
  } catch (error) {
    console.error(error);
  }
}

// Task 13: Get book details by Title - Promise callbacks
function getBookByTitle(title) {
  axios.get(`http://localhost:5000/title/${title}`)
    .then(response => {
      console.log(`Books with title ${title}:`, response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
