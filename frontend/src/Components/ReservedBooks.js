import React from 'react';
import './ReservedBooks.css';

function ReservedBooks() {
  // Random book data
  const bookData = [
    { name: 'John', book: 'The Alchemist', date: '12/7/2022' },
    { name: 'Emily', book: 'To Kill a Mockingbird', date: '10/8/2022' },
    { name: 'David', book: 'The Great Gatsby', date: '15/9/2022' },
    { name: 'Sophia', book: 'Pride and Prejudice', date: '02/10/2022' },
    { name: 'Oliver', book: 'Harry Potter and the Sorcerer\'s Stone', date: '21/7/2022' },
    { name: 'Emma', book: 'The Catcher in the Rye', date: '02/6/2022' },
  ];

  return (
    <div className='reservedbooks-container'>
      <h1 className='reservedbooks-title'>Books On Hold</h1>
      <table className='reservedbooks-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Book</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book, index) => (
            <tr key={index}>
              <td>{book.name}</td>
              <td>{book.book}</td>
              <td>{book.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservedBooks;
