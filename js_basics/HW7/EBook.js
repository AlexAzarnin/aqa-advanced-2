import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    // Getter and Setter for fileFormat
    getFileFormat() {
        return this._fileFormat;
    }

    setFileFormat(fileFormat) {
        if (!fileFormat) {
            throw new Error("File format cannot be empty.");
        }
        this._fileFormat = fileFormat;
    }

    // Override printInfo method
    preparePrintInfo() {
        const bookInfo = super.preparePrintInfo();
        return `${bookInfo} File Format: ${this._fileFormat}`;
    }

    // Static method to convert a Book instance to an EBook instance
    static fromBook(book, fileFormat) {
        return new EBook(book.getTitle(), book.getAuthor(), book.getYear(), fileFormat);
    }
}