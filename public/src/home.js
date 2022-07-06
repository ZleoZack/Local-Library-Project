function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}


function getBooksBorrowedCount(books) {
  return books.reduce((counter, book) => {!book.borrows[0].returned ? counter++ : null;
    return counter;
  }, 0);
}


function getMostCommonGenres(books) {
  let bookArr = {};
  books.forEach((book) => {(bookArr[book.genre] == null) ? bookArr[book.genre] = 1 : bookArr[book.genre] += 1;})
  let bookArray = [];
  for (const [key, value] of Object.entries(bookArr)) {
    bookArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  //bookArray.sort((bookA, bookB) => bookB.count - bookA.count);
  //return bookArray.slice(0, 5);
  return _showTopFive(bookArray);
} 
//Helper function
function _showTopFive (arr) {
  arr.sort((elementA, elementB) => elementB.count - elementA.count);
  return arr.slice(0, 5)
}

function getMostPopularBooks(books) {
  let popularBooks = [];
    books.forEach(({title, borrows}) => {
    popularBooks.push({
      "name" : title,
      "count" : borrows.length
    });
  }); 
//popularBooks.sort((bookA, bookB) => bookB.count - bookA.count);
//return popularBooks.slice(0, 5);
return _showTopFive(popularBooks);
}

function getMostPopularAuthors(books, authors) {
let result = [];
authors.forEach((author) => {
  let refAuth = {
    name: `${author.name.first} ${author.name.last}`, count: 0
  };
  books.forEach((book) => {
  book.authorId === author.id ? refAuth.count += book.borrows.length : null;
  });
  result.push(refAuth);
});
//return result.sort((valA, valB) => valB.count - valA.count).slice(0 ,5);
return _showTopFive(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
