function findAuthorById(authors, id) {
  //take in an array of authors and return the one with the matching id
  let acc = authors.filter(author => author.id==id);
    return acc[0];
}

function findBookById(books, id) {
  //take in an array of books and return the one with the matching id
  let acc = books.filter(book => book.id==id);
    return acc[0];
}

function partitionBooksByBorrowedStatus(books) {
/* books = array of books
  return an array with two arrays inside, one for-
  checked out and one for returned books */
  let checkedOutArr= books.filter(book => book.borrows[0].returned === false);
  let returnedArr = books.filter(book => book.borrows[0].returned === true);
  return [checkedOutArr, returnedArr];
}

function getBorrowersForBook(book, accounts) {
//book is just an object and accounts is an accounts array
//return an array of 10 or less acounts that also show returned status
//loop through borrows and push it to an array
let result = [];
let limitedResult = [];
for(let i=0;i<book.borrows.length;i++){
  accounts.forEach(acc =>{
    if(acc.id === book.borrows[i].id){
      acc.returned = book.borrows[i].returned;
      result.push(acc);
    }
  });
}

for (let i=0;i<10;i++){
  limitedResult.push(result[i]);
}
  return limitedResult;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
