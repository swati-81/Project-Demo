const books = [
    {
      title: "Software Enginnering",
      author: "Dr. Amarjeet Singh",
      price: "$5.99",
      image: "book1.jpeg"
    },
    {
      title: "The basics of Engineering",
      author: "Lokesh Pandey",
      price: "$7.99",
      image: "book2.jpg"
    },
    {
      title: "Mechanical Engineering",
      author: "S. Chand",
      price: "$4.99",
      image: "book3.png"
    }
  ];
  function displayBooks() {
    const bookList = document.getElementById('bookList');
    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
      bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p class="author">${book.author}</p>
        <p class="price">${book.price}</p>
        <a href="#" class="btn">Buy Now</a>
      `;
      bookList.appendChild(bookCard);
    });
  }
  function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query)); 
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
      bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p class="author">${book.author}</p>
        <p class="price">${book.price}</p>
        <a href="#" class="btn">Buy Now</a>
      `;
      bookList.appendChild(bookCard);
    });
  }
  displayBooks();