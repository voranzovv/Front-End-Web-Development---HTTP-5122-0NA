const verses =[
  {
    "reference": "John 3:16",
    "book_name": "John",
    "chapter": 3,
    "verse": 16,
    "text": "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    "translation": "KJV"
  },
  {
    "reference": "Psalm 23:1",
    "book_name": "Psalms",
    "chapter": 23,
    "verse": 1,
    "text": "The Lord is my shepherd; I shall not want.",
    "translation": "KJV"
  },
  {
    "reference": "Genesis 1:1",
    "book_name": "Genesis",
    "chapter": 1,
    "verse": 1,
    "text": "In the beginning God created the heaven and the earth.",
    "translation": "KJV"
  },
  {
    "reference": "Romans 8:28",
    "book_name": "Romans",
    "chapter": 8,
    "verse": 28,
    "text": "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
    "translation": "KJV"
  },
  {
    "reference": "Proverbs 3:5",
    "book_name": "Proverbs",
    "chapter": 3,
    "verse": 5,
    "text": "Trust in the Lord with all thine heart; and lean not unto thine own understanding.",
    "translation": "KJV"
  },
  {
    "reference": "Matthew 6:33",
    "book_name": "Matthew",
    "chapter": 6,
    "verse": 33,
    "text": "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    "translation": "KJV"
    }
];


function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

// Display a random verse on the webpage innerHTML
window.onload = function() {
    const verse = getRandomVerse();
    const verseDisplay = document.getElementById('verse-display');
    verseDisplay.innerHTML = `<strong>${verse.reference}</strong>: ${verse.text} <em>(${verse.translation})</em>`;
}
