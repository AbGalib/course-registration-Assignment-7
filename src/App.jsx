// App.jsx

import './App.css';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
  const maxCreditHours = 20;
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [creditHourRemaining, setCreditHourRemaining] = useState(maxCreditHours);

  const handleAddToBookmark = blog => {
    // Check if the blog is already bookmarked
    const isBookmarked = bookmarks.some(item => item.id === blog.id);

    // Calculate the new credit hour remaining after adding the blog
    const newReadingTime = readingTime + blog.reading_time;
    const newCreditHourRemaining = maxCreditHours - newReadingTime;

    // Check if the blog is already bookmarked
    if (isBookmarked) {
      alert('This blog is already bookmarked!');
      return;
    }

    // Check if adding the blog exceeds the credit hour limit
    if (newCreditHourRemaining < 0) {
      alert('Credit hour limit reached!');
      return;
    }

    // Update the bookmarks, total credit hours, and remaining credit hours
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    setReadingTime(newReadingTime);
    setCreditHourRemaining(newCreditHourRemaining);
  };

  return (
    <>
      <Header />
      <div className='md:flex mx-5 my-5'>
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} creditHourRemaining={creditHourRemaining} />
      </div>
    </>
  );
}

export default App;
