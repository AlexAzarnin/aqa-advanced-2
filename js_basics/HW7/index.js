import { Book } from './Book.js';
import { EBook } from './EBook.js';

// Create Book
const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('War and Peace', 'L. Tolstoy', 1867);

console.log('Books:');
console.log(book1.preparePrintInfo());
console.log(book2.preparePrintInfo());

// Create EBook
const eBook = new EBook('Crime and Punishment', 'F. Dostoevsky', 1866, 'PDF');
console.log('Ebook:');
console.log(eBook.preparePrintInfo());

// Oldest book
const oldestBook = Book.findOldestBook([book1, book2, eBook]);
console.log('The oldest book is:');
console.log(oldestBook.preparePrintInfo());

// Convert Book to EBook
const convertedEBook = EBook.fromBook(book1, 'ePub');
console.log('Converted book is:');
console.log(convertedEBook.preparePrintInfo());