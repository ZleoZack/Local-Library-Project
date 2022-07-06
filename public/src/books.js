function findAuthorById(authors, id) {
  return authors.find((author) =>  author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let arr = [];
  const borrowed = books.filter(book => !book.borrows[0].returned);
  const returned = books.filter(book => book.borrows[0].returned);
  arr.push(borrowed, returned);
  return arr;
}

function getBorrowersForBook(book, accounts) {
return book.borrows.map((borrow) => {
  let account = accounts.find((account) => account.id === borrow.id);
return{...borrow, ...account};
}).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
