export class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }


    getTitle() {
        return this._title;
    }

    setTitle(title) {
        if (!title) {
            throw new Error("Title cannot be empty.");
        }
        this._title = title;
    }


    getAuthor() {
        return this._author;
    }

    setAuthor(author) {
        if (!author) {
            throw new Error("Author cannot be empty.");
        }
        this._author = author;
    }


    getYear() {
        return this._year;
    }

    setYear(year) {
        if (year < 0 || year > new Date().getFullYear()) {
            throw new Error("Year must be a valid number.");
        }
        this._year = year;
    }


    preparePrintInfo() {
        return `Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`;
    }

    // Static method to find the oldest book by year
    static findOldestBook(booksArray) {
        if(booksArray.length === 0) {
            throw new Error('Empty array');
        }

        return booksArray.reduce((oldest, book) => {
            return oldest.getYear() < book.getYear() ? oldest : book;
        });
    }
}
