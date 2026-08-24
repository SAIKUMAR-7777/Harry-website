const books = [
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "isbn": "9780061122415",
    "cover": "https://covers.openlibrary.org/b/isbn/9780061122415-M.jpg",
    "description": "Explore The Alchemist, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "isbn": "9780061120084",
    "cover": "https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg",
    "description": "Explore To Kill a Mockingbird, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Fiction",
    "isbn": "9780743273565",
    "cover": "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg",
    "description": "Explore The Great Gatsby, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "genre": "Fiction",
    "isbn": "9780451524935",
    "cover": "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
    "description": "Explore 1984, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "Animal Farm",
    "author": "George Orwell",
    "genre": "Fiction",
    "isbn": "9780451526342",
    "cover": "https://covers.openlibrary.org/b/isbn/9780451526342-M.jpg",
    "description": "Explore Animal Farm, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "genre": "Fiction",
    "isbn": "9781594631931",
    "cover": "https://covers.openlibrary.org/b/isbn/9781594631931-M.jpg",
    "description": "Explore The Kite Runner, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "The Book Thief",
    "author": "Markus Zusak",
    "genre": "Fiction",
    "isbn": "9780375842207",
    "cover": "https://covers.openlibrary.org/b/isbn/9780375842207-M.jpg",
    "description": "Explore The Book Thief, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J. D. Salinger",
    "genre": "Fiction",
    "isbn": "9780316769488",
    "cover": "https://covers.openlibrary.org/b/isbn/9780316769488-M.jpg",
    "description": "Explore The Catcher in the Rye, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "The Fault in Our Stars",
    "author": "John Green",
    "genre": "Fiction",
    "isbn": "9780062208110",
    "cover": "https://covers.openlibrary.org/b/isbn/9780062208110-M.jpg",
    "description": "Explore The Fault in Our Stars, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "Life of Pi",
    "author": "Yann Martel",
    "genre": "Fiction",
    "isbn": "9780156027328",
    "cover": "https://covers.openlibrary.org/b/isbn/9780156027328-M.jpg",
    "description": "Explore Life of Pi, a curated fiction selection in SaiVerse Digital Library."
  },
  {
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "genre": "Science & Technology",
    "isbn": "9780553380163",
    "cover": "https://covers.openlibrary.org/b/isbn/9780553380163-M.jpg",
    "description": "Explore A Brief History of Time, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "The Selfish Gene",
    "author": "Richard Dawkins",
    "genre": "Science & Technology",
    "isbn": "9780198788607",
    "cover": "https://covers.openlibrary.org/b/isbn/9780198788607-M.jpg",
    "description": "Explore The Selfish Gene, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "Cosmos",
    "author": "Carl Sagan",
    "genre": "Science & Technology",
    "isbn": "9780345539434",
    "cover": "https://covers.openlibrary.org/b/isbn/9780345539434-M.jpg",
    "description": "Explore Cosmos, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "The Elegant Universe",
    "author": "Brian Greene",
    "genre": "Science & Technology",
    "isbn": "9780393338102",
    "cover": "https://covers.openlibrary.org/b/isbn/9780393338102-M.jpg",
    "description": "Explore The Elegant Universe, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "Astrophysics for People in a Hurry",
    "author": "Neil deGrasse Tyson",
    "genre": "Science & Technology",
    "isbn": "9780393609394",
    "cover": "https://covers.openlibrary.org/b/isbn/9780393609394-M.jpg",
    "description": "Explore Astrophysics for People in a Hurry, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "The Gene",
    "author": "Siddhartha Mukherjee",
    "genre": "Science & Technology",
    "isbn": "9781476733500",
    "cover": "https://covers.openlibrary.org/b/isbn/9781476733500-M.jpg",
    "description": "Explore The Gene, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "Silent Spring",
    "author": "Rachel Carson",
    "genre": "Science & Technology",
    "isbn": "9780618249060",
    "cover": "https://covers.openlibrary.org/b/isbn/9780618249060-M.jpg",
    "description": "Explore Silent Spring, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "The Innovators",
    "author": "Walter Isaacson",
    "genre": "Science & Technology",
    "isbn": "9781476708706",
    "cover": "https://covers.openlibrary.org/b/isbn/9781476708706-M.jpg",
    "description": "Explore The Innovators, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "Steve Jobs",
    "author": "Walter Isaacson",
    "genre": "Science & Technology",
    "isbn": "9781451648546",
    "cover": "https://covers.openlibrary.org/b/isbn/9781451648546-M.jpg",
    "description": "Explore Steve Jobs, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "The Code Book",
    "author": "Simon Singh",
    "genre": "Science & Technology",
    "isbn": "9780385495325",
    "cover": "https://covers.openlibrary.org/b/isbn/9780385495325-M.jpg",
    "description": "Explore The Code Book, a curated science & technology selection in SaiVerse Digital Library."
  },
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self-Development",
    "isbn": "9780735211292",
    "cover": "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg",
    "description": "Explore Atomic Habits, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey",
    "genre": "Self-Development",
    "isbn": "9781982137274",
    "cover": "https://covers.openlibrary.org/b/isbn/9781982137274-M.jpg",
    "description": "Explore The 7 Habits of Highly Effective People, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "How to Win Friends and Influence People",
    "author": "Dale Carnegie",
    "genre": "Self-Development",
    "isbn": "9780671027032",
    "cover": "https://covers.openlibrary.org/b/isbn/9780671027032-M.jpg",
    "description": "Explore How to Win Friends and Influence People, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill",
    "genre": "Self-Development",
    "isbn": "9781585424337",
    "cover": "https://covers.openlibrary.org/b/isbn/9781585424337-M.jpg",
    "description": "Explore Think and Grow Rich, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "The Power of Now",
    "author": "Eckhart Tolle",
    "genre": "Self-Development",
    "isbn": "9781577314806",
    "cover": "https://covers.openlibrary.org/b/isbn/9781577314806-M.jpg",
    "description": "Explore The Power of Now, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "Deep Work",
    "author": "Cal Newport",
    "genre": "Self-Development",
    "isbn": "9781455586691",
    "cover": "https://covers.openlibrary.org/b/isbn/9781455586691-M.jpg",
    "description": "Explore Deep Work, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "The 5 AM Club",
    "author": "Robin Sharma",
    "genre": "Self-Development",
    "isbn": "9781443456623",
    "cover": "https://covers.openlibrary.org/b/isbn/9781443456623-M.jpg",
    "description": "Explore The 5 AM Club, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "Mindset",
    "author": "Carol S. Dweck",
    "genre": "Self-Development",
    "isbn": "9780345472328",
    "cover": "https://covers.openlibrary.org/b/isbn/9780345472328-M.jpg",
    "description": "Explore Mindset, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "Essentialism",
    "author": "Greg McKeown",
    "genre": "Self-Development",
    "isbn": "9780804137386",
    "cover": "https://covers.openlibrary.org/b/isbn/9780804137386-M.jpg",
    "description": "Explore Essentialism, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "Grit",
    "author": "Angela Duckworth",
    "genre": "Self-Development",
    "isbn": "9781501111105",
    "cover": "https://covers.openlibrary.org/b/isbn/9781501111105-M.jpg",
    "description": "Explore Grit, a curated self-development selection in SaiVerse Digital Library."
  },
  {
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "genre": "History",
    "isbn": "9780062316097",
    "cover": "https://covers.openlibrary.org/b/isbn/9780062316097-M.jpg",
    "description": "Explore Sapiens, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "Guns, Germs, and Steel",
    "author": "Jared Diamond",
    "genre": "History",
    "isbn": "9780393317558",
    "cover": "https://covers.openlibrary.org/b/isbn/9780393317558-M.jpg",
    "description": "Explore Guns, Germs, and Steel, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "A People's History of the United States",
    "author": "Howard Zinn",
    "genre": "History",
    "isbn": "9780060838652",
    "cover": "https://covers.openlibrary.org/b/isbn/9780060838652-M.jpg",
    "description": "Explore A People's History of the United States, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "The Silk Roads",
    "author": "Peter Frankopan",
    "genre": "History",
    "isbn": "9781101912379",
    "cover": "https://covers.openlibrary.org/b/isbn/9781101912379-M.jpg",
    "description": "Explore The Silk Roads, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "India After Gandhi",
    "author": "Ramachandra Guha",
    "genre": "History",
    "isbn": "9780060958589",
    "cover": "https://covers.openlibrary.org/b/isbn/9780060958589-M.jpg",
    "description": "Explore India After Gandhi, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "The Discovery of India",
    "author": "Jawaharlal Nehru",
    "genre": "History",
    "isbn": "9780143031031",
    "cover": "https://covers.openlibrary.org/b/isbn/9780143031031-M.jpg",
    "description": "Explore The Discovery of India, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "The Story of My Experiments with Truth",
    "author": "M. K. Gandhi",
    "genre": "History",
    "isbn": "9780143421384",
    "cover": "https://covers.openlibrary.org/b/isbn/9780143421384-M.jpg",
    "description": "Explore The Story of My Experiments with Truth, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "The Wright Brothers",
    "author": "David McCullough",
    "genre": "History",
    "isbn": "9781476728759",
    "cover": "https://covers.openlibrary.org/b/isbn/9781476728759-M.jpg",
    "description": "Explore The Wright Brothers, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "The Diary of a Young Girl",
    "author": "Anne Frank",
    "genre": "History",
    "isbn": "9780553296983",
    "cover": "https://covers.openlibrary.org/b/isbn/9780553296983-M.jpg",
    "description": "Explore The Diary of a Young Girl, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "SPQR",
    "author": "Mary Beard",
    "genre": "History",
    "isbn": "9780871404237",
    "cover": "https://covers.openlibrary.org/b/isbn/9780871404237-M.jpg",
    "description": "Explore SPQR, a curated history selection in SaiVerse Digital Library."
  },
  {
    "title": "The Hound of the Baskervilles",
    "author": "Arthur Conan Doyle",
    "genre": "Mystery & Thriller",
    "isbn": "9780140437501",
    "cover": "https://covers.openlibrary.org/b/isbn/9780140437501-M.jpg",
    "description": "Explore The Hound of the Baskervilles, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "And Then There Were None",
    "author": "Agatha Christie",
    "genre": "Mystery & Thriller",
    "isbn": "9780062073484",
    "cover": "https://covers.openlibrary.org/b/isbn/9780062073484-M.jpg",
    "description": "Explore And Then There Were None, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "Murder on the Orient Express",
    "author": "Agatha Christie",
    "genre": "Mystery & Thriller",
    "isbn": "9780062693662",
    "cover": "https://covers.openlibrary.org/b/isbn/9780062693662-M.jpg",
    "description": "Explore Murder on the Orient Express, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "The Girl with the Dragon Tattoo",
    "author": "Stieg Larsson",
    "genre": "Mystery & Thriller",
    "isbn": "9780307454546",
    "cover": "https://covers.openlibrary.org/b/isbn/9780307454546-M.jpg",
    "description": "Explore The Girl with the Dragon Tattoo, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "genre": "Mystery & Thriller",
    "isbn": "9780307474278",
    "cover": "https://covers.openlibrary.org/b/isbn/9780307474278-M.jpg",
    "description": "Explore The Da Vinci Code, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "Angels & Demons",
    "author": "Dan Brown",
    "genre": "Mystery & Thriller",
    "isbn": "9781416524793",
    "cover": "https://covers.openlibrary.org/b/isbn/9781416524793-M.jpg",
    "description": "Explore Angels & Demons, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "genre": "Mystery & Thriller",
    "isbn": "9781250301697",
    "cover": "https://covers.openlibrary.org/b/isbn/9781250301697-M.jpg",
    "description": "Explore The Silent Patient, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "genre": "Mystery & Thriller",
    "isbn": "9780553418361",
    "cover": "https://covers.openlibrary.org/b/isbn/9780553418361-M.jpg",
    "description": "Explore Gone Girl, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "The Woman in the Window",
    "author": "A. J. Finn",
    "genre": "Mystery & Thriller",
    "isbn": "9780062678416",
    "cover": "https://covers.openlibrary.org/b/isbn/9780062678416-M.jpg",
    "description": "Explore The Woman in the Window, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "The Murder of Roger Ackroyd",
    "author": "Agatha Christie",
    "genre": "Mystery & Thriller",
    "isbn": "9780062074005",
    "cover": "https://covers.openlibrary.org/b/isbn/9780062074005-M.jpg",
    "description": "Explore The Murder of Roger Ackroyd, a curated mystery & thriller selection in SaiVerse Digital Library."
  },
  {
    "title": "The Hobbit",
    "author": "J. R. R. Tolkien",
    "genre": "Fantasy & Adventure",
    "isbn": "9780547928227",
    "cover": "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg",
    "description": "Explore The Hobbit, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "The Fellowship of the Ring",
    "author": "J. R. R. Tolkien",
    "genre": "Fantasy & Adventure",
    "isbn": "9780544003415",
    "cover": "https://covers.openlibrary.org/b/isbn/9780544003415-M.jpg",
    "description": "Explore The Fellowship of the Ring, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J. K. Rowling",
    "genre": "Fantasy & Adventure",
    "isbn": "9780590353427",
    "cover": "https://covers.openlibrary.org/b/isbn/9780590353427-M.jpg",
    "description": "Explore Harry Potter and the Sorcerer's Stone, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "Harry Potter and the Chamber of Secrets",
    "author": "J. K. Rowling",
    "genre": "Fantasy & Adventure",
    "isbn": "9780439064866",
    "cover": "https://covers.openlibrary.org/b/isbn/9780439064866-M.jpg",
    "description": "Explore Harry Potter and the Chamber of Secrets, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "The Lion, the Witch and the Wardrobe",
    "author": "C. S. Lewis",
    "genre": "Fantasy & Adventure",
    "isbn": "9780064404990",
    "cover": "https://covers.openlibrary.org/b/isbn/9780064404990-M.jpg",
    "description": "Explore The Lion, the Witch and the Wardrobe, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "The Golden Compass",
    "author": "Philip Pullman",
    "genre": "Fantasy & Adventure",
    "isbn": "9780440418320",
    "cover": "https://covers.openlibrary.org/b/isbn/9780440418320-M.jpg",
    "description": "Explore The Golden Compass, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "Percy Jackson and the Olympians",
    "author": "Rick Riordan",
    "genre": "Fantasy & Adventure",
    "isbn": "9780786856299",
    "cover": "https://covers.openlibrary.org/b/isbn/9780786856299-M.jpg",
    "description": "Explore Percy Jackson and the Olympians, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "Eragon",
    "author": "Christopher Paolini",
    "genre": "Fantasy & Adventure",
    "isbn": "9780375826689",
    "cover": "https://covers.openlibrary.org/b/isbn/9780375826689-M.jpg",
    "description": "Explore Eragon, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "The Name of the Wind",
    "author": "Patrick Rothfuss",
    "genre": "Fantasy & Adventure",
    "isbn": "9780756404741",
    "cover": "https://covers.openlibrary.org/b/isbn/9780756404741-M.jpg",
    "description": "Explore The Name of the Wind, a curated fantasy & adventure selection in SaiVerse Digital Library."
  },
  {
    "title": "The Maze Runner",
    "author": "James Dashner",
    "genre": "Fantasy & Adventure",
    "isbn": "9780385737944",
    "cover": "https://covers.openlibrary.org/b/isbn/9780385737944-M.jpg",
    "description": "Explore The Maze Runner, a curated fantasy & adventure selection in SaiVerse Digital Library."
  }
];