
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/* 
// === DESTRUCTURING === // 

const object1 = {
  studentName: "Tala",
  age: 23,
};

const { studentName } = object1;
console.log(studentName);

const book = getBook(2);
// const author = book.author
// const title = book.title

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "novel"];
console.log(newGenres);

const updatedBook = {
  ...book,
  //Adding a new property
  moviePublicationDate: "2001-12-19",

  //Overwriting an existing property
  pages: 1210,
};
updatedBook;

const pagesRange = pages > 1000? 'more than 1000' :'less than 1000'
console.log(`the '${title}' book has ${pagesRange} pages`)


console.log(`the book '${title}' has ${pages} pages`)

console.log(true && 'Some string')
console.log(false && 'Some string')

//falsy: 0, '', null, undefined 
console.log(hasMovieAdaptation && 'This book has a movie ')
console.log(book.translations.spanish || 'Not translated')

console.log(book.reviews.librarything.reviewsCount || 'No data')
// console.log(book.reviews.librarything.reviewsCount ?? 'No data') this should return '0' 

function getTotalReviewCount(book){
  const goodread = book.reviews?.goodreads?.reviewsCount ?? '0';
  const librarything = book.reviews?.librarything?.reviewsCount ?? '0';
  return goodread + librarything
}

console.log(getTotalReviewCount(book))

*/

/*
function getTotalReviewCount(book){
  const goodread = book.reviews?.goodreads?.reviewsCount ?? '0';
  const librarything = book.reviews?.librarything?.reviewsCount ?? '0';
  return goodread + librarything
}

const books = getBooks();

const x=[1,2,3,4,5].map((el) => el*2)
console.log(x)

const titles = books.map((book) => book.title)
console.log(titles)

const titleAndAuthor = books.map((e) =>({
  title: e.title,
  author: e.author,
  reviewsCount: getTotalReviewCount(e)
}))
console.log(titleAndAuthor)

const longBooks = books
.filter((e) => e.pages > 500)
.filter((e) => e.hasMovieAdaptation)
console.log(longBooks)

const adventureBooks = books
.filter((e) => e.genres.includes('adventure'))
.map((e) => e.title)
console.log(adventureBooks)

const pagesAllBooks = books.reduce((acc, e) => acc + e.pages, 0)
console.log(pagesAllBooks);

const array1 = [3, 7,1,9,6]
const sorted= array1.slice().sort((a,b) => a - b)
console.log(sorted)

const sortedByPages= books.slice().sort((a,b) => a.pages - b.pages)
.map((e) => e.title + ' Number of pages:' + e.pages)
console.log(sortedByPages) //Shows the name of books from least to highest number of pages

// 1. Add book object to array

const newBook = {
  id:6,
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J. K. Rowling'
}

const booksAfterAdd = [...books, newBook]

// 2. Delete book object from array

const booksAfterDelete = booksAfterAdd.filter((e) => e.id !== 3)
console.log(booksAfterDelete)

// 3 . Update book object from array

const booksAfterUpdate = books.map((e) => e.id===1 ? {...e, title:'tala'} : e)
console.log(booksAfterUpdate)
*/


// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((res) => res.json())
// .then((data) => console.log(data))

// console.log('Tala')

async function getTodos(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data= await res.json()
  console.log(data)
}

getTodos()

console.log('Tala')