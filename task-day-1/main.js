class Book {
    static counter = 0;
    constructor(author, bookName, price, rackNo, status, edition, dateOfPurchase) {
        this.bookId = ++Book.counter;
        this.author = author;
        this.bookName = bookName;
        this.price = price;
        this.rackNo = rackNo;
        this.status = status;
        this.edition = edition;
        this.dateOfPurchase = dateOfPurchase;
    }
    displayBookDetails() {
        console.log(
            `Book Name is ${this.bookName} the ${this.edition} edition, authored by ${this.author} and it'costs $${this.price} ${this.dateOfPurchase}`
        );
    }
    updateStatus() {
        console.log(this.status == true ? (this.status = false) : (this.status = true));
    }
}

class Librarian {
    constructor(libName, password) {
        this.libName = libName;
        this.password = password;
    }
    searchBook(book, db) {
        if (db.includes(book)) {
            console.log("Book is here");
        } else {
            console.log("SORRY, there is no book with such a name");
        }
    }
    verifyMember() {}
    issueBook(book, db) {
        db.push(book);
    }
    calculateFine() {}
    createBill() {}
    returnBook() {}
}

class Bill {
    constructor(billNo, date, memberId, amount) {
        this.billNo = billNo;
        this.date = date;
        this.memberId = memberId;
        this.amount = amount;
    }
    billCreate() {}
    billUpdate() {}
}

class Transacition {
    static counter = 0;
    constructor(memberId, bookId, dateOfIssue, dueDate) {
        this.transId = ++Transacition.counter;
        // this.transId = transId;
        this.memberId = memberId.memberId;
        this.bookId = bookId.bookId;
        this.dateOfIssue = dateOfIssue;
        this.dueDate = dueDate;
    }
    createTransition(transaction, db) {
        db.push(transaction);
    }
    deleteTransition(transaction, db) {}
    retrieveTransition() {}
}

class MemberRecord {
    static counter = 0;
    constructor(type, dateOfMembership, noBookIssued, maxBookLimit, memberName, address, phoneNo, isPayed) {
        this.memberId = ++MemberRecord.counter;
        this.type = type;
        this.dateOfMembership = dateOfMembership;
        this.noBookIssued = noBookIssued;
        this.maxBookLimit = maxBookLimit;
        this.memberName = memberName;
        this.address = address;
        this.phoneNo = phoneNo;
        this.isPayed = isPayed;
    }
    retriveMember() {}
    increaseBookIssued() {
        this.noBookIssued += 1;
    }
    decreaseBookIssued() {
        this.noBookIssued > 0 ? (this.noBookIssued -= 1) : (this.noBookIssued = 0);
    }
    payBill() {
        this.isPayed
            ? console.log("You have payed for the book")
            : console.warn("The bill is not pay yet, please pay it as soon as possible");
    }
}
let dbOfBooks = [];
let dbOfMember = [];
let dbOfBill = [];
let dbOfTransaction = [];
let dbOfDeletedTransaction = [];

let date = new Date("12-7-2019");

let b1 = new Book(1, "Bahnasi", "Mango Dry Beans", 20, 3, false, "15th", date.toDateString());
let b2 = new Book(2, "Boray", "Cover Coco", 20, 3, false, "15th", date.toDateString());
let b3 = new Book(3, "Boray", "Cover Coco", 53, 2, true, "2nd", date.toDateString());

let lib = new Librarian("Anas", "12345");

let m1 = new MemberRecord("Student", "8-2017", 4, 3, "Omar", "St.77", "011111111111", true);
let m2 = new MemberRecord("Employee", "3-2016", 6, 9, "Anas", "St.9", "0100000000", false);

let t1 = new Transacition(m1, b1, date.toDateString(), date.toDateString());
let t2 = new Transacition("1", b2, date.toDateString(), date.toDateString());
let t3 = new Transacition(m2, b2, date.toDateString(), date.toDateString());

lib.issueBook(b1, dbOfBooks);
lib.issueBook(b2, dbOfBooks);
lib.searchBook(b2, dbOfBooks);

b1.displayBookDetails();

t1.createTransition(b1, dbOfTransaction);

console.log(dbOfBooks);
console.log(Transacition.counter);
console.log(t1);
console.log(t3);
console.log(m1);
console.log(m2);
m2.payBill();
