function findAccountById(accounts, id) {
//take in an array of accounts and return the one with the matching id
let acc = accounts.filter(account => account.id==id);
  return acc[0];
}
function sortAccountsByLastName(accounts) {
  // use a sort method to sort the accounts by last name
  const names = accounts.sort((userA, userB)=> userA.name.last > userB.name.last ? 1:-1);
    return names;
}

function getTotalNumberOfBorrows(account, books) {
  /* returns a number that represents the number of times
   the account's ID appears in any book's `borrows` array. */
  const count = books.reduce((acc, book)=>{
    book.borrows.forEach(checkedOut =>{
      if (checkedOut.id === account.id){
        acc++
      }})
        return acc;
  },0);
    return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.reduce((answer, book)=>{
    if (!book.borrows[0].returned && book.borrows[0].id === account.id){
      book.author = authors.find(author => author.id === book.authorId);
      answer.push(book);
    }
  return answer;
  },[])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
