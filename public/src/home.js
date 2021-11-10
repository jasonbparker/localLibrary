function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}
// ^^ self explanatory ^^

function sortAndSlice(arr){
  // helper function for sorting and slicing
  arr.sort((a,b)=>b.count -a.count);
  return arr.slice(0,5);
}

function getBooksBorrowedCount(books) {
  /* returns a number that represents the number of books 
  that are currently checked out of the library. 

  Loop through the books array and add to the counter if the 
  book is checked out. */
 
    let counter = 0;
    books.forEach(book=>{
     if (book.borrows[0].returned===false){
        counter++
      }
    });
  return counter;
}

function getMostCommonGenres(books) {
  /* most common to least
     top 5 
  */
  const result = books.map((book)=> book.genre);
  const counts = {};
  result.forEach(num=>{
    counts[num] = (counts[num] || 0) +1
  });


  let answer = [];
  let names = Object.keys(counts);
  let counter = Object.values(counts);
  for (let i=0;i<5;i++){
    let genreObject = {};
    genreObject.name = names[i];
    genreObject.count = counter[i];
    answer.push(genreObject);
  }
    answer.sort((genreA, genreB)=>genreB.count - genreA.count);
      return answer;
}

function getMostPopularBooks(books) {
  let answer = [];
  answer = books.map(({title, borrows} = books)=>{
    return {name : title, count : borrows.length};
  });
  return sortAndSlice(answer);
}


function getMostPopularAuthors(books, authors) {
  //create empty array to store our most popular authors in
  let result = [];

  authors.forEach((author)=>{
    let authObj= {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
  books.forEach(book => {
    if (book.authorId === author.id){
      authObj.count += book.borrows.length;
    };
    
  })
  result.push(authObj);
});
  return sortAndSlice(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
