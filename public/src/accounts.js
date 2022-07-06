function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const result = books.reduce((total, book) => total + book.borrows.filter(bookId => bookId.id === account.id).length, 0);
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  return (
  books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned).map((book) => {book["author"] = authors.find((author) => author.id === book.authorId);
  return book;
})
);
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
