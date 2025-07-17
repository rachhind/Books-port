const Book = require('./../models/book-model');
const router = require('express').Router();
const Sequelize = require('sequelize');

// Add a book
router.post('/addBook', (req, res) => {
    Book.create({
        image: 'https://m.media-amazon.com/images/I/81EJDQfg3dL._UF1000,1000_QL80_.jpg',
        title: 'the house at watch hill',
        contact: 'john doe',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
        abstract: 'a thrilling mystery novel set in a coastal town.',
        author: 'karen marie moning',
        publish_date: 'october 2024',
        category: 'fiction',
    })

    .then((book) => {
        return res.status(200).json({ msg: `${book.title} has been added successfully` });
    })
    .catch((err) => {
        return res.status(500).json({ error: 'Failed to add book', details: err.message });
    });
});

// Get all books
router.get('/getBooks', (req, res) => {
    Book.findAll()
        .then((books) => {
            return res.status(200).json(books);
        })
        .catch((err) => {
            return res.status(500).json({ error: 'Failed to retrieve books', details: err.message });
        });
});

// Get a single book by ID
router.get('/getBook/:id', (req, res) => {
    Book.findByPk(req.params.id)
        .then((book) => {
            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }
            return res.status(200).json(book);
        })
        .catch((err) => {
            return res.status(500).json({ error: 'Failed to retrieve book', details: err.message });
        });
});

// Change book status (borrow/return)
router.patch('/changeBook/:id', (req, res) => {
Book.findOne({ where: { id: req.params.id } })
        .then((book) => {
            if (!book) {
                return res.status(404).json({ success: false, error: 'Book not found' });
            }

            if (book.status === 'available' && book.borrowedBy == null) {
                book.status = 'not available';
                book.borrowedBy = req.body.email;
            } else if (book.status === 'not available' && req.body.email === book.borrowedBy) {
                book.status = 'available';
                book.borrowedBy = null;
            } else {
                return res.json({ success: false, message: 'Invalid operation' });
            }

            return book.save().then((updatedBook) => {
                return res.status(200).json({ book: updatedBook, success: true });
            });
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: 'Failed to update book', details: err.message });
        });
});

module.exports = router;
